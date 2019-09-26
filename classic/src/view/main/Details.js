Ext.define('LoginDemo.view.main.Details', {
    extend: 'Ext.form.Panel',
    xtype: 'admindetails',
    height: '100%',
    scrollable: true,
    title: 'Profile',
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
            inputType: 'email',
            name: 'email',
            reference: 'email',
            allowBlank: false
    },  {
            xtype: 'displayfield',
            fieldLabel: 'Verified account',
            name: 'verified',
            reference: 'verified',
            allowBlank: false
    }],
    buttonAlign: 'center',
    buttons: [{
        text: 'Reset password',
        handler: 'onPasswordReset',
    },  {
        reference: 'verifiedButton',
        text: 'Verify email address',
        handler: 'onVerifyEmail'
    },  {
        text: 'Save details',
        handler: 'onSave'
    },  {
        text: 'Reset to previous details',
        handler: 'onResetDetails'
    }],
});