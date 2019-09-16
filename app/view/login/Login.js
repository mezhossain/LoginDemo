Ext.define('LoginDemo.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',
	alias: 'widget.login',


	controller: 'login',
	bodyPadding: 10,
	width: 300,
	title: 'Login',
	closable: false,
	autoShow: true,
	
	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Username',
			labelAlign: 'top',
			labelStyle: 'font-weight:bold',
			width: '100%',
			allowBlank: false,
			reference: 'username'
		}, {
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			labelAlign: 'top',
			labelStyle: 'font-weight:bold',
			allowBlank: false,
			width: '100%',
			reference: 'password'
		},	{
			xtype: 'checkboxfield',
			name: 'rememberme',
			inputValue: 'rem',
			boxLabel: 'Remember me',
			reference: 'rem'
			
		}],
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
			
		},  {
			text: 'Forgot password',
			listeners: { 
				click: 'onForgotPasswordClick' 
			}
		}]
	}
});