Ext.define('LoginDemo.view.user.UserView', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-user',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'LoginDemo.view.main.MainController',
		'LoginDemo.view.main.MainModel',
		'LoginDemo.view.main.List',
	],

	controller: 'main',
	viewModel: 'main',
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
		iconCls: 'fa-th-list',
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
		iconCls: 'fa-home',
		// The following grid shares a store with the classic version's grid as well!
		items: [{
			xtype: 'userdetails'
		}]
	}]
}); 