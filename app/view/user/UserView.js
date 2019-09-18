Ext.define('LoginDemo.view.user.UserView', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-user',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'LoginDemo.view.user.UserController',
		'LoginDemo.view.user.UserViewModel',
		'LoginDemo.view.user.UserDetails',
	],

	controller: 'user',
    viewModel: 'user',
	plugins: 'viewport',

	ui: 'navigation',

	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-user',
		items: [{
			xtype: 'button',
			text: 'Logout',
			margin: '10 0',
			handler: 'onLogout'
		}]
	},

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		bodyPadding: 20,
		tabConfig: {
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},

	items: [{
		title: 'User Settings',
		glyph: 'f013',
		items: [{
			xtype: 'userdetails'
		}]
	}]
}); 