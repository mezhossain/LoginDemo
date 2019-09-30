Ext.define('LoginDemo.view.group.GroupController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.group',


    deleteGroup() {
        var me = this;
        Ext.Msg.confirm('Delete Confirm', 'Are you sure you want to delete this group?', me.onDeleteGroupConfirm, me);
    },

    onDeleteGroupConfirm(choice) {
        var me = this;
		if (choice === 'yes') {
            const selectedGroup = me.getViewModel().get('selectedGroup');
            console.log(selectedGroup);
            var deleteRecord = me.getStore('Groups').findRecord('group', selectedGroup.data.group);
            console.log(deleteRecord);
			deleteRecord.erase({
				callback: e => {
					me.getStore('Groups').load();
					Ext.Ajax.request({
						url: 'cred.json',
						method: 'DELETE',
						headers: { 'Content-Type': 'application/json' },
						jsonData: Ext.util.JSON.encode(deleteRecord.data),
						success: function (response) {
                            var json = Ext.decode(response.responseText);
                            Ext.Msg.alert('Group Deleted', "Group was successfully deleted");
						},
						failure: function () {
							Ext.Msg.alert('Error', "Group was not deleted");
						},
					});
				}
			});
		}
    },

    updateGroup() {
        var me = this;
        const selectedGroup = me.getViewModel().get('selectedGroup');
        var record = me.getStore('Groups').findRecord('group', selectedGroup.data.group);
        console.log(record);
        var win = Ext.create('LoginDemo.view.update.UpdateGroup');
        win.lookupReference('groupname').setValue(selectedGroup.data.group);
        win.lookupReference('groupdesc').setValue(selectedGroup.data.description);
        win.show();
    },

    onGroupSubmit: function () {
        var me = this;
        var group = me.lookupReference("groupname").getValue();
        var desc = me.lookupReference("groupdesc").getValue();
        var userarray , rolearray;
        var userconst = me.lookupReference("userselect").getSelectionModel().getSelected();
        var userarray = [];
        for (var n = 0; n < userconst.items.length; n++) {
            userarray.push(userconst.items[n].data.username);
        }
        var roleconst = me.lookupReference("roleselect").getSelectionModel().getSelected();
        var rolearray = [];
        for (var n = 0; n < roleconst.items.length; n++) {
            rolearray.push(roleconst.items[n].data.role);
        }       
        var groupobj = {
            group: group,
            description: desc,
            roles: rolearray,
            users: userarray
        }
        var store = Ext.data.StoreManager.lookup('users');
        store.insert(0, groupobj);
        store.load();
        Ext.Ajax.request({
			url: 'group.json',
			method: 'PUT',
			jsonData: Ext.util.JSON.encode(groupobj),
			headers:
			{
				'Content-Type': 'application/json'
			},
			success: function (response) {
                Ext.Msg.alert('Success', "Group was successfully added to the database");
			},
			failure: function () {
				Ext.Msg.alert('Error', "Group was not added");
			}
        });
        var win = Ext.WindowManager.getActive();
        win.destroy();
    }, 

    onGroupClear: function () {
        var me = this;
        var group = me.lookupReference("groupname").reset();
        var desc = me.lookupReference("groupdesc").reset();
        userarray = me.lookupReference("userselect").getSelectionModel().deselectAll();
        rolearray = me.lookupReference("roleselect").getSelectionModel().deselectAll();
    },

    onGroupUpdate: function () {
        var me = this;
        var group = me.lookupReference("groupname").getValue();
        var desc = me.lookupReference("groupdesc").getValue();
        var userarray , rolearray;
        var userconst = me.lookupReference("userselect").getSelectionModel().getSelected();
        var userarray = [];
        for (var n = 0; n < userconst.items.length; n++) {
            userarray.push(userconst.items[n].data.username);
        }
        var roleconst = me.lookupReference("roleselect").getSelectionModel().getSelected();
        var rolearray = [];
        for (var n = 0; n < roleconst.items.length; n++) {
            rolearray.push(roleconst.items[n].data.role);
        }
        var store = Ext.data.StoreManager.lookup('groups');
        var updateRecord = store.findRecord('group', group);
        updateRecord.set('group', group);
        updateRecord.set('description', desc);
        updateRecord.set('roles', rolearray);
        updateRecord.set('users', userarray);
        store.load();
        var groupobj = {
            group: group,
            description: desc,
            roles: rolearray,
            users: userarray
        }
        console.log(groupobj);
        Ext.Ajax.request({
			url: 'group.json',
			method: 'PUT',
			jsonData: Ext.util.JSON.encode(groupobj),
			headers:
			{
				'Content-Type': 'application/json'
			},
			success: function (response) {
                Ext.Msg.alert('Success', "Group was successfully updated to the database");
			},
			failure: function () {
				Ext.Msg.alert('Error', "Group was not updated");
			}
        });
        var win = Ext.WindowManager.getActive();
        win.destroy();
    }
});