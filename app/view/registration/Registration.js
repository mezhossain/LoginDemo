Ext.define('LoginDemo.view.registration.Registration', {
	extend: 'Ext.window.Window',
	xtype: 'registration',

	requires: [
		'LoginDemo.view.registration.RegistrationController',
		'Ext.form.Panel'
	],

	controller: 'registration',
	bodyPadding: 10,
	title: 'Registration',
	closable: false,
	autoShow: true,

	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Username',
			allowBlank: false
		}, {
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			allowBlank: false
		}, {
			xtype: 'displayfield',
			hideEmptyLabel: false,
			value: 'Enter any non-blank password'
		}],
		buttons: [{
            text: 'Register',
            formBind: true,
			listeners: { 
				click: 'onRegistrationSuccess' 
			}
		}]
	}
});