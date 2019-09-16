Ext.define('LoginDemo.view.user.UserDetails', {
    extend: 'Ext.form.Panel',
    xtype: 'userdetails',
    title: 'User Settings',
    controller: 'user',
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
    }],
    buttonAlign: 'center',
    buttons: [{
        text: 'Reset password',
        handler: 'onPasswordReset',
    },  {
        text: 'Verify email address'
    }]
});