Ext.define('LoginDemo.view.user.UserController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.user',

	onLogout: function () {
        localStorage.removeItem('LoggedInAdmin');
        localStorage.removeItem('LoggedInUser');

		localStorage.removeItem('CurrentUser');
		
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    },

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
				Ext.Msg.alert(
					'Error',
					'Unable to connect to server. Please try again later.',
				);
			}
		})
	},

	onVerifyEmail: function () {
		Ext.Msg.alert(
			'Email verification',
			'A verification link has been sent to your email address. Please check your inbox.',
		);
	},

	onRequestEdit: function () {
        Ext.Msg.alert('Edit details', 'Please contact your administrator to edit your personal details');
	},
	
	onSave: function () {
		var me = this;
		var user = localStorage.getItem('CurrentUser');
		var name= me.lookupReference('givenname').getValue();
        var email = me.lookupReference('email').getValue();
        var store = Ext.data.StoreManager.lookup('users');
        var updateRecord = store.findRecord('username', user);
        var updateEmail = updateRecord.set('email', email);
        var updateName = updateRecord.set('name', name);
        store.load();
        Ext.Ajax.request({
            url: 'cred.json',
            method: 'PUT',
            jsonData: true,
			setUseDefaultXhrHeader: false,
			withCredentials: true,
			params: {
				username: user,
				email: updateEmail,
				name: updateName
			},
			scope: this,
            success: function (response) {
                var obj = Ext.decode(response.responseText);
                Ext.Msg.alert('Update Successful', "User was successfully updated");
            },
            failure: function () {
                Ext.Msg.alert('Error', "User was not updated");
            }
        });
	},

	beforeRender: function () {
		var me = this;
		var user = localStorage.getItem('CurrentUser');
		me.getViewModel().set('name', user);
		Ext.Ajax.request({
			url: 'cred.json',
			method: 'POST',
			jsonData: true,
			setUseDefaultXhrHeader: false,
			withCredentials: true,
			params: {
				username: user
			},
			scope: this,
			success: function (response) {
				var obj = Ext.decode(response.responseText);
				for(var n = 0; n < obj.length; n++) {
					if (obj[n].username == user) {
						me.lookupReference('givenname').setValue(obj[n].name);
						me.lookupReference('username').setValue(obj[n].username);
						me.lookupReference('userpass').setValue(obj[n].password);
						me.lookupReference('email').setValue(obj[n].email);
						if (obj[n].verified == true){
							me.lookupReference('verified').setValue("Yes");
							me.lookupReference('verifiedButton').disable();
							me.lookupReference('verifiedButton').setText('Account verified');
						} else {
							me.lookupReference('verified').setValue("No");
						}
						break;
					}
				}
			},
			failure: function () {
				Ext.Msg.alert(
					'Error',
					'Unable to connect to server. Please try again later.',
				);
			}
		})
	}
});