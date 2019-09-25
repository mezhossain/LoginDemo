
Ext.define('LoginDemo.view.user.UserForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'LoginDemo.view.main.MainController',
        'LoginDemo.view.main.MainModel',
    ],
    xtype: 'userform',
    // title: 'Create User',
    controller: 'main',
    viewModel: 'main',
    bodyPadding: '20',
    fieldDefaults: {
        msgTarget: 'side',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        width: '100%'
    },
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
        fieldLabel: 'Password',
        inputType: 'password',
        name: 'password',
        reference: 'userpass',
        allowBlank: false
    },  {
        xtype: 'textfield',
        fieldLabel: 'Email',
        vtype: 'email',
        name: 'email',
        reference: 'email',
        allowBlank: false
    },  {
        xtype: 'combo',
        fieldLabel: 'Group',
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
        editable: false
    },  {
        xtype: 'combo',
        fieldLabel: 'Account Verified',
        name: 'verified',
        queryMode: 'local',
        valueField: 'verified',
        displayField: 'verifiedName',
        store: {
            fields: ['role', 'roleName'],
            data: [{
                verified: false,
                verifiedName: 'No'
            }]
        },
        editable: false
    }],
    buttonAlign: 'center',
    buttons: [{
        text: 'Clear',
        handler: 'onFormClear',
    },  {
        reference: 'verifiedButton',
        text: 'Submit',
        handler: 'onFormSubmit',
        formBind: true,
    }],
});