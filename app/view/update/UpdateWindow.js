Ext.define('LoginDemo.view.update.UpdateWindow', {
    extend: 'Ext.window.Window',
    title: 'Update User',
    iconCls: 'x-fa fa-edit',
    layout: 'form',
    controller: 'main',
    items: [{
        xtype: 'form',
        width: 400,
        items:[{
            xtype: 'displayfield',
            fieldLabel: 'Username',
            name: 'username',
            reference: 'username',
            labelStyle: 'font-weight:bold',
            allowBlank: false
        },  {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            reference: 'givenname',
            labelAlign: 'top',
            allowBlank: false,
            labelStyle: 'font-weight:bold',
            width: '100%'
        },  {
            xtype: 'textfield',
            fieldLabel: 'Email',
            vtype: 'email',
            name: 'email',
            reference: 'email',
            labelAlign: 'top',
            allowBlank: false,
            labelStyle: 'font-weight:bold',
            width: '100%'
        },  {
            xtype: 'combo',
            fieldLabel: 'Account Level',
            labelAlign: 'top',
            name: 'role',
            queryMode: 'local',
            valueField: 'role',
            displayField: 'roleName',
            store: {
                fields: ['role', 'roleName'],
                data: [{
                    role: 'admin',
                    roleName: 'Admin'
                },	{
                    role: 'user',
                    roleName: 'User'
                }]
            },
            reference: 'role',
            editable: false,
            labelStyle: 'font-weight:bold',
            width: '100%'
        },  {
            xtype: 'displayfield',
            fieldLabel: 'Verified',
            labelAlign: 'left',
            name: 'verified',
            reference: 'verified',
            labelStyle: 'font-weight:bold',

        }],
    
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            items: [{
                xtype: 'button',
                text: 'Cancel',
                handler: function () {
                    Ext.WindowManager.getActive().destroy();
                }
            }, '->', {
                xtype: 'button',
                text: 'Update',
                handler: 'onUpdate'
            }]
        }]
    }]   
});