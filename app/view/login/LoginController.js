Ext.define('LoginDemo.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	onLoginClick: function() {

		var win = Ext.WindowManager.getActive();
		var user = win.lookupReference('username').getValue();
		var pass = win.lookupReference('password').getValue();
		var rem = win.lookupReference('rem').getValue();
		Ext.Ajax.request({
			url: 'cred.json',
			method: 'POST',
			jsonData: true,
			// headers: {
			// 	'Content-Type': 'application/json'
			// },
			setUseDefaultXhrHeader: false,
			withCredentials: true,
			params: {
				username: user,
				password: pass
			},
			scope: this,
			success: function (response) {
				var obj = Ext.decode(response.responseText);
				for(var n = 0; n < obj.length; n++) {
					if( obj[n].password == pass ){
						if (obj[n].role == 'admin') {
							if (rem == true) {
								localStorage.setItem('LoggedInAdmin', true);
							}
							win.destroy();
							Ext.create({
								xtype: 'app-main'
							});
							Ext.Msg.alert(
								"Login Successful",
								"Welcome to your admin dashboard"
							);
							break;
						} else if (obj[n].role == 'user') {
							if (rem == true) {
								localStorage.setItem('LoggedInUser', true);
							}
							win.destroy();
							var userview = Ext.create('LoginDemo.view.user.UserView');
							Ext.Msg.alert(
								"Login Successful",
								"Welcome to your user dashboard"
							);
							break;
						} 
					} else {
						Ext.Msg.alert(
							'Login Failed',
							'You have entered invalid credentials.',
						);
					}
				}
			},
			failure: function () {
				console.log("Failed");
			}
		});
	},

	onForgotPasswordClick: function () {
		var me = this;
		me.getView().destroy();
		Ext.create({
			xtype: 'forgotpassword'
		}).show();
	},

	onPasswordGenerate: function () {
		var genPassword = Math.floor(Math.random() * 100000000);
		var win = Ext.WindowManager.getActive();
		var user = win.lookupReference('username').getValue();
		Ext.Ajax.request({
			url: 'cred.json',
			method: 'POST',
			jsonData: true,
			setUseDefaultXhrHeader: false,
			withCredentials: true,
			params: {
				username: user,
			},
			scope: this,
			success: function (response) {
				var obj = Ext.decode(response.responseText);
				for(var n = 0; n < obj.length; n++) {
					if (obj[n].username == user) {
						obj[n].password = genPassword;
						console.log(obj[n]);
						win.destroy();
						Ext.Msg.alert(
							"Forgot Password",
							"A new password has been provided to your email address. Please check your inbox and follow the instructions.",
							this.backToLogin
						);
						break;
					} else {
						Ext.Msg.alert(
							'Invalid username',
							'The username you have provided is not in our database. Please try again.',
						);
					}
				}
			},
			failure: function () {
				console.log("Failed");
			}
		})
	},
	backToLogin: function() {
		Ext.create({
			xtype: 'login'
		});
	},
	onRegisterClick: function() {
		this.getView().destroy();
		Ext.create({
			xtype: 'registration'
		});

	}
});