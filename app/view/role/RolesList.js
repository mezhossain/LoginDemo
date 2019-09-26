Ext.define('LoginDemo.view.role.RolesList', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        'Ext.toolbar.Paging',
    ],
    xtype: 'roleslist',

    title: 'Group Roles',
    controller: 'roles',
    viewModel: { type: 'roles' },
    bind: { store: '{Roles}', selection: '{selectedRole}' },
    scrollable: true,
    reference: 'roleslist',

    beforeRender: function () {
        var me = this;
        var d = me.lookupReference('dButton');
        d.destroy();

        var u = me.lookupReference('uButton');
        u.setHandler('updateRole');
        u.setBind({
            disabled: '{!selectedRole}'
        });

        me.callParent(arguments);
    },

    columns: [{ 
        text: 'Role Name', 
        dataIndex: 'role', 
        flex: 0.2,
        sortable: true
    },  { 
        text: 'Role Description', 
        dataIndex: 'description', 
        flex: 1, 
        sortable: true 
    }],
});
