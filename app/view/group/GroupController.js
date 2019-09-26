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
        var win = Ext.create({
            xtype: 'updategroup'
        });
        // win.lookupReference('username').setValue(selectedUser.data.username);
        // win.lookupReference('givenname').setValue(selectedUser.data.name);
		// win.lookupReference('email').setValue(selectedUser.data.email);
        // win.lookupReference('role').setValue(selectedUser.data.role);
        // if (selectedUser.data.verified == true){
        //     win.lookupReference('verified').setValue("Yes");
        // } else {
        //     win.lookupReference('verified').setValue("No");
        // }
        win.show();
    },

    onGroupSubmit: function () {
        var me = this;
        var group = me.lookupReference("groupname");
        console.log(group);
        var desc = me.lookupReference("groupdesc");
        var userarray , rolearray;
        userarray = me.lookupReference("userselect").getSelectionModel().getSelected();
        console.log(userarray);

        rolearray = me.lookupReference("roleselect").getSelectionModel().getSelected();
        console.log(rolearray);
    },

    onGroupClear: function () {
        var me = this;
        var group = me.lookupReference("groupname").reset();
        var desc = me.lookupReference("groupdesc").reset();
        userarray = me.lookupReference("userselect").getSelectionModel().deselectAll();
        rolearray = me.lookupReference("roleselect").getSelectionModel().deselectAll();
    }
});