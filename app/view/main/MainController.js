/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLogout: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedInAdmin');
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('CurrentUser');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },

    beforeRender: function () {
		var me = this;
		var user = localStorage.getItem('CurrentUser');
		me.getViewModel().set('name', user);
    },

    addUser: function() {
        var me = this;
        Ext.create('Ext.Window', {
            extend: 'Ext.window.Window',
            iconCls: 'x-fa fa-plus',
            title: 'Create New User',
            modal: true,
            items:[{
                xtype: 'userform',
                width: 400,
                height: 530
            }]
        }).show();
    },

    onFormClear: function () {
        this.getView().getForm().reset();
    },

    onFormSubmit: function () {
        var me = this;
        var submit = me.getView().getForm().getValues();
        var store = Ext.data.StoreManager.lookup('users');
        var win = Ext.WindowManager.getActive();
        store.insert(0, submit);
        store.load();
        Ext.Ajax.request({
			url: 'cred.json',
			method: 'POST',
			jsonData: Ext.util.JSON.encode(submit),
			headers:
			{
				'Content-Type': 'application/json'
			},
			success: function (response) {
                Ext.Msg.alert('Success', "User was successfully added to the database");
			},
			failure: function () {
				Ext.Msg.alert('Error', "User was not added");
			}
        });
        win.destroy();
    },
    
    deleteUser() {
		Ext.Msg.confirm('Delete Confirm', 'Are you sure you want to delete this user?', this.onDeleteUserConfirm, this);
	},

	onDeleteUserConfirm(choice) {
		var me = this;
		if (choice === 'yes') {
            const selectedUser = me.getViewModel().get('selectedUser');
            console.log(selectedUser);
            var deleteRecord = me.getStore('Users').findRecord('username', selectedUser.data.username);
            console.log(deleteRecord);
			deleteRecord.erase({
				callback: e => {
					me.getStore('Users').load();
					Ext.Ajax.request({
						url: 'cred.json',
						method: 'DELETE',
						headers: { 'Content-Type': 'application/json' },
						jsonData: Ext.util.JSON.encode(deleteRecord.data),
						success: function (response) {
                            var json = Ext.decode(response.responseText);
                            Ext.Msg.alert('User Deleted', "User was successfully deleted");
						},
						failure: function () {
							Ext.Msg.alert('Error', "User was not deleted");
						},
					});
				}
			});
		}
    },
    
    updateUser() {
        var me = this;
        const selectedUser = me.getViewModel().get('selectedUser');
        var win = Ext.create('LoginDemo.view.update.UpdateUser');
        win.lookupReference('username').setValue(selectedUser.data.username);
        win.lookupReference('givenname').setValue(selectedUser.data.name);
		win.lookupReference('email').setValue(selectedUser.data.email);
        win.lookupReference('role').setValue(selectedUser.data.role);
        if (selectedUser.data.verified == true){
            win.lookupReference('verified').setValue("Yes");
        } else {
            win.lookupReference('verified').setValue("No");
        }
        win.show();
    },

    onUpdate: function() {
        var win = Ext.WindowManager.getActive();
    	var name= win.lookupReference('givenname').getValue();
        var user = win.lookupReference('username').getValue();
        var email = win.lookupReference('email').getValue();
        var role = win.lookupReference('role').getValue();
        var verified = win.lookupReference('verified').getValue();
        var store = Ext.data.StoreManager.lookup('users');
        var updateRecord = store.findRecord('username', user);
        updateRecord.set('role', role);
        updateRecord.set('email', email);
        updateRecord.set('verified', verified);
        updateRecord.set('name', name);
        var pass = updateRecord.data.password;
        var updatedUser = {
            name: name,
            username: user,
            password: pass,
            email: email,
            role: role,
            verified: verified
        };
        store.load();
        Ext.Ajax.request({
            url: 'cred.json',
            method: 'PUT',
            jsonData: Ext.util.JSON.encode(updatedUser),
            headers:
            {
                'Content-Type': 'application/json'
            },
            success: function (response) {
                var obj = Ext.decode(response.responseText);
                Ext.Msg.alert('Update Successful', "Job was successfully updated");
            },
            failure: function () {
                Ext.Msg.alert('Error', "Job was not updated");
            }
        });
		if (win) {
			win.close();
		}
    },

    addGroup: function() {
        var me = this;
        Ext.create('Ext.Window', {
            extend: 'Ext.window.Window',
            iconCls: 'x-fa fa-plus',
            title: 'Create New Group',
            modal: true,
            items:[{
                xtype: 'groupform',
                width: 1000,
                height: 530
            }],
            layout: 'fit'
        }).show();
    }, 
});
