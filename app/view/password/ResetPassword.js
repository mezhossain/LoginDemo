Ext.define('LoginDemo.view.password.ResetPassword', {
    extend: 'Ext.window.Window',
	xtype: 'resetpassword',
    alias: 'widget.resetpass',
    
    requires: [
		'LoginDemo.view.user.UserController',
		'Ext.form.Panel'
    ],
    
    controller: 'user',
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
			name: 'currentpass',
			fieldLabel: 'Enter your current password',
			labelAlign: 'top',
            labelStyle: 'font-weight:bold',
            inputType: 'password',
			width: '100%',
			allowBlank: false,
			reference: 'currentpass'
		},  {
			xtype: 'textfield',
			name: 'password1',
			fieldLabel: 'Enter your new password',
			labelAlign: 'top',
            labelStyle: 'font-weight:bold',
            inputType: 'password',
			width: '100%',
			allowBlank: false,
			reference: 'password1'
		},  {
			xtype: 'textfield',
			name: 'password2',
			fieldLabel: 'Confirm your new password',
			labelAlign: 'top',
            labelStyle: 'font-weight:bold',
            inputType: 'password',
			width: '100%',
			allowBlank: false,
			reference: 'password2'
		}],
		buttons: [{
            text: 'Back',
            handler: function () {
                var win = Ext.WindowManager.getActive();
                win.destroy();
            }
        },  {
			text: 'Reset password',
			formBind: true,
			listeners: { 
				click: 'onPasswordConfirm' 
			}
		}]
	}

});