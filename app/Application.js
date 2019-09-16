/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('LoginDemo.Application', {
	extend: 'Ext.app.Application',

	name: 'LoginDemo',

	quickTips: false,
	platformConfig: {
		desktop: {
			quickTips: true
		}
	},

	stores: [
		// TODO: add global / shared stores here
	],

	launch: function () {

		// It's important to note that this type of application could use
		// any type of storage, i.e., Cookies, LocalStorage, etc.
		var loggedInAdmin;
		var loggedInUser;

		// Check to see the current value of the localStorage key
		loggedInAdmin = localStorage.getItem('LoggedInAdmin');
		loggedInUser = localStorage.getItem('LoggedInUser');
		if (loggedInAdmin == 'true' && loggedInUser != 'true') {
			Ext.create({
				xtype: 'app-main'
			});
		} else if (loggedInUser == 'true' && loggedInAdmin != 'true') {
			Ext.create({
				xtype: 'app-user'
			});
		} else {
			Ext.create({
				xtype: 'login'
			});
		}
	
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
