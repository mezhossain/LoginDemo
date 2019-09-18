Ext.define('LoginDemo.view.main.List', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        'Ext.toolbar.Paging',
    ],
    xtype: 'mainlist',

    title: 'Users',
    controller: 'main',
    viewModel: { type: 'main' },
    bind: { store: '{Users}', selection: '{selectedUser}' },
    scrollable: true,
    reference: 'userlist',

    columns: [
        { 
            text: 'Name', 
            dataIndex: 'name', 
            flex: 1
        },  { 
            text: 'Username', 
            dataIndex: 'username', 
            flex: 1, 
            editor: { allowBlank: false }, 
            sortable: true 
        },  { 
            text: 'Account Level', 
            dataIndex: 'role', 
            flex: 0.5, 
            editor: { allowBlank: false }, 
            sortable: true,
            renderer: Ext.String.capitalize
        },  { 
            text: 'Email', 
            dataIndex: 'email', 
            flex: 1, 
            editor: { allowBlank: false }, 
            sortable: true,
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            } 
        },  { 
            text: 'Verified', 
            dataIndex: 'verified', 
            editor: { allowBlank: false }, 
            sortable: true,
            renderer: function (value) {
                if (value == true) {
                    return "Yes";
                } else {
                    return "No";
                }
            } 
        }
    ],
});