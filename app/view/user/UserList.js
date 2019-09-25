Ext.define('LoginDemo.view.user.UserList', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        'Ext.toolbar.Paging',
    ],
    xtype: 'userlist',

    title: 'Users',
    controller: 'main',
    viewModel: { type: 'main' },
    bind: { store: '{Users}', selection: '{selectedUser}' },
    scrollable: true,
    reference: 'userlist',

    beforeRender: function () {
        var me = this;

        var d = me.lookupReference('dButton');
        d.setHandler('deleteUser');
        d.setBind({
            disabled: '{!selectedUser}'
        });

        var u = me.lookupReference('uButton');
        u.setHandler('updateUser');
        u.setBind({
            disabled: '{!selectedUser}'
        });

        me.callParent(arguments);
    },

    columns: [
        { 
            text: 'Name', 
            dataIndex: 'name', 
            flex: 1
        },  { 
            text: 'Username', 
            dataIndex: 'username', 
            flex: 1, 
            editor: { allowBlank: false }, 
            sortable: true 
        },  { 
            text: 'Group', 
            dataIndex: 'role', 
            flex: 0.5, 
            editor: { allowBlank: false }, 
            sortable: true,
            renderer: Ext.String.capitalize
        },  { 
            text: 'Email', 
            dataIndex: 'email', 
            flex: 1, 
            editor: { allowBlank: false }, 
            sortable: true,
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            } 
        },  { 
            text: 'Verified', 
            dataIndex: 'verified', 
            editor: { allowBlank: false }, 
            sortable: true,
            renderer: function (value) {
                if (value == true) {
                    return "Yes";
                } else {
                    return "No";
                }
            } 
        }
    ],
});