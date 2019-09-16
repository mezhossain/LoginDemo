Ext.define('LoginDemo.view.password.ForgotPassword', {
    extend: 'Ext.window.Window',
	xtype: 'forgotpassword',
    alias: 'widget.forgotpass',
    
    requires: [
		'LoginDemo.view.login.LoginController',
		'Ext.form.Panel'
    ],
    
    controller: 'login',
	bodyPadding: 10,
	title: 'Forgot Password',
	closable: false,
	autoShow: true,
	width: 300,

	items: {
		xtype: 'form',
        reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Please enter your username',
			labelAlign: 'top',
			labelStyle: 'font-weight:bold',
			width: '100%',
			allowBlank: false,
			reference: 'username'
		}],
		buttons: [{
            text: 'Back',
            handler: function () {
                var win = Ext.WindowManager.getActive();
                win.destroy();
                Ext.create({
                    xtype: 'login'
                });
            }
        },  {
			text: 'Generate password',
			formBind: true,
			listeners: { 
				click: 'onPasswordGenerate' 
			}
		}]
	}

});