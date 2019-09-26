Ext.define('LoginDemo.view.role.RolesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.roles',


    updateRole: function () {
        var me = this;
        var win = Ext.create('Ext.Window', {
            extend: 'Ext.window.Window',
            modal: true,
            title: 'Update Role',
            layout: 'form',
			xtype: 'form',
			width: 400,
            plain: true,
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'Role',
                labelAlign: 'top',
                labelStyle: 'font-weight:bold',
                width: '100%',
                name: 'role',
                reference: 'rolename',
            },  {
                xtype: 'textarea',
                fieldLabel: 'Role description',
                labelAlign: 'top',
                labelStyle: 'font-weight:bold',
                width: '100%',
                name: 'description',
                reference: 'description'
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: [{
                    xtype: 'button',
                    text: 'Cancel',
                    handler: function () {
                        win.close();
                    }
                },'->',{
                    xtype: 'button',
                    text: 'Update',
                    handler: 'onRoleUpdate'
                }]
            }]
        }).show();
    },

    onRoleUpdate: function () {
        var me = this;
    }
});