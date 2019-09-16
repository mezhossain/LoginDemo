Ext.define('LoginDemo.view.user.UserController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.user',

	onPasswordReset: function () {
		Ext.create({
			xtype: 'resetpassword'
		}).show();
	},

	onPasswordConfirm: function () {
		var win = Ext.WindowManager.getActive();
		var currentpass = win.lookupReference('currentpass').getValue();
		console.log(currentpass);
		var pass1 = win.lookupReference('password1').getValue();
		console.log(pass1);
		var pass2 = win.lookupReference('password2').getValue();
		console.log(pass2);
		Ext.Ajax.request({
			url: 'cred.json',
			method: 'POST',
			jsonData: true,
			setUseDefaultXhrHeader: false,
			withCredentials: true,
			params: {
				password: currentpass
			},
			scope: this,
			success: function (response) {
				var obj = Ext.decode(response.responseText);
				for(var n = 0; n < obj.length; n++) {
					if (obj[n].password == currentpass) {
						if (pass1 == pass2) {
							obj[n].password = pass2;
							console.log(obj[n]);
							win.destroy();
							Ext.Msg.alert(
								"Password Reset",
								"Your password has been succesfully reset.",
							);
						} else {
							Ext.Msg.alert(
								"Error",
								"Passwords do not match. Please try again",
							);
						}
						break;
					} else {
						Ext.Msg.alert(
							'Error',
							'The current password you provided was incorrect. Please try again.',
						);
					}
				}
			},
			failure: function () {
				console.log("Failed");
			}
		})
	}
});