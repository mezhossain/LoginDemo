Ext.define('LoginDemo.view.update.UpdateWindow', {
    extend: 'Ext.window.Window',
    title: 'Update User',
    iconCls: 'x-fa fa-plus',
    layout: 'form',
    controller: 'main',
    items: [{
        xtype: 'form',
        width: 400,
        items:[{
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            reference: 'givenname',
            allowBlank: false
        },  {
            xtype: 'textfield',
            fieldLabel: 'Username',
            name: 'username',
            reference: 'username',
            allowBlank: false
        },  {
            xtype: 'textfield',
            fieldLabel: 'Email',
            inputType: 'email',
            name: 'email',
            reference: 'email',
            allowBlank: false
        },  {
            xtype: 'combo',
            fieldLabel: 'Account Level',
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
            editable: false
        },  {
            xtype: 'displayfield',
            fieldLabel: 'Account Verified',
            name: 'verified',
            reference: 'verified',
            editable: false
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