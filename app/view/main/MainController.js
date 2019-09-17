/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

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

    onFormClear: function () {
        this.getView().getForm().reset();
    },

    onFormSubmit: function () {
        var me = this;
        var submit = me.getView().getForm().getValues();
        var store = Ext.data.StoreManager.lookup('users');
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
    },
    
    deleteUser() {
		Ext.Msg.confirm('Delete Confirm', 'Are you sure you want to delete this job?', this.onDeleteUserConfirm, this);
	},

	onDeleteUserConfirm(choice) {
		var me = this;
		if (choice === 'yes') {
            const selectedUser = me.getViewModel().get('selectedJob');
            var deleteRecord = me.getStore('Users').findRecord('username', selectedUser.data.username);
            console.log(deleteRecord);
			deleteRecord.erase({
				callback: e => {
					me.getStore('Users').load();
					Ext.Ajax.request({
						url: 'cred.json',
						method: 'DELETE',
						headers: { 'Content-Type': 'application/json' },
						jsonData: Ext.util.JSON.encode(deleteRecord),
						success: function (response) {
                            var json = Ext.decode(response.responseText);
                            Ext.Msg.alert('User Deleted', "Job was successfully deleted");
						},
						failure: function () {
							Ext.Msg.alert('Error', "Job was not deleted");
						},
					});
				}
			});
		}
    },
    
    updateUser() {
        var me = this;
        const selectedUser = me.getViewModel().get('selectedJob');
        var win = Ext.create('LoginDemo.view.update.UpdateWindow');
        win.lookupReference('givenname').setValue(selectedUser.data.name);
		win.lookupReference('username').setValue(selectedUser.data.username);
        win.lookupReference('role').setValue(selectedUser.data.role);
        if (selectedUser.data.verified == true){
            win.lookupReference('verified').setDisplayValue("");
        } else {
            win.lookupReference('verified').setValue("No");
        }
        win.show();
    },

    onUpdate: function() {
        var win = Ext.WindowManager.getActive();
    	var name= win.lookupReference('givenname').getValue();
        var user = win.lookupReference('username').getValue();
        var role = win.lookupReference('role').getValue();
        var verified = win.lookupReference('verified').getValue();
        var store = Ext.data.StoreManager.lookup('gSmsSyncStore');
        var updateRecord = store.findRecord('username', user);
        updateRecord.set('role', role);
        updateRecord.set('verified', verified);
        updateRecord.set('name', name);
        store.load();
		if (win) {
			win.close();
		}
    }

});
