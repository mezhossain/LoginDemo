/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginDemo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'LoginDemo.view.main.MainController',
        'LoginDemo.view.main.MainModel',
        'LoginDemo.view.user.UserList'
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
        iconCls: 'fa-user',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onLogout'
        }],
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
        title: 'Users Accounts',
        iconCls: 'fa-user',
        items: [{
            xtype: 'userlist'
        }],
        layout: 'fit'
    }, {
        title: 'User Groups',
        iconCls: 'fa-users',
        items: [{
            xtype: 'grouplist'
        }],
        layout: 'fit'
    }, {
        title: 'Group Roles',
        glyph: 'f1b3',
        items: [{
            xtype: 'roleslist'
        }],
        layout: 'fit'
    }, {
		title: 'Profile',
		glyph: 'f013',
		items: [{
			xtype: 'admindetails'
        }],
        layout: 'fit'
    }],
    buttons: [{
        text: 'Create New User',
        listeners: {
        	click: 'addUser'
        }
    },  {
        text: 'Create New Group',
        listeners: { 
        	click: 'addGroup' 
        }
    }],
    buttonAlign: 'center'
});
