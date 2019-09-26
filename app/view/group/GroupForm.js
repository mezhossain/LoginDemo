
Ext.define('LoginDemo.view.group.GroupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'groupform',
    // title: 'Create User',
    controller: 'group',
    viewModel: 'group',
    bodyPadding: '20',
    fieldDefaults: {
        msgTarget: 'side',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        width: '100%'
    },
    items:[{
        xtype: 'textfield',
        fieldLabel: 'Group',
        name: 'group',
        reference: 'groupname',
        allowBlank: false
    },  {
        xtype: 'textarea',
        fieldLabel: 'Group description',
        name: 'description',
        reference: 'groupdesc',
    },  {
        xtype: 'tabpanel',
        height: 300,
        plain: true,
        items: [{
            layout: 'fit',
            title: 'Users',
            items: [{
                xtype: 'grid',
                reference: 'userselect',
                selModel: {
                    selType: 'checkboxmodel'
                },
                controller: 'main',
                viewModel: { type: 'main' },
                bind: { store: '{Users}' },
                scrollable: true,
                columns: [{ 
                    text: 'Name', 
                    dataIndex: 'name', 
                    flex: 1
                },  { 
                    text: 'Username', 
                    dataIndex: 'username', 
                    flex: 1, 
                    sortable: true 
                },  { 
                    text: 'Group', 
                    dataIndex: 'role', 
                    flex: 0.5, 
                    sortable: true,
                    renderer: Ext.String.capitalize
                },  { 
                    text: 'Email', 
                    dataIndex: 'email', 
                    flex: 1, 
                    sortable: true,
                    renderer: function(value) {
                        return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
                    } 
                }]
            }]
        },  {
            title: 'Roles',
            layout: 'fit',
            items: [{
                xtype: 'grid',
                reference: 'roleselect',
                selModel: {
                    selType: 'checkboxmodel',
                    mode: 'MULTI'
                },
                controller: 'roles',
                viewModel: { type: 'roles' },
                bind: { store: '{Roles}' },
                scrollable: true,
                columns: [{ 
                    text: 'Role Name', 
                    dataIndex: 'role', 
                    flex: 0.2,
                    sortable: true
                },  { 
                    text: 'Role Description', 
                    dataIndex: 'description', 
                    flex: 1, 
                    sortable: true 
                }]
            }]
        }],
    }],
    buttonAlign: 'center',
    buttons: [{
        text: 'Clear',
        handler: 'onGroupClear',
    },  {
        reference: 'verifiedButton',
        text: 'Done',
        handler: 'onGroupSubmit',
        formBind: true,
    }],
});