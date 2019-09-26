
Ext.define('LoginDemo.view.update.UpdateGroup', {
    extend: 'Ext.window.Window',
    iconCls: 'x-fa fa-edit',
    xtype: 'updategroup',
    title: 'Update Group',
    controller: 'group',
    viewModel: 'group',
    modal: true,
    bodyPadding: '20',
    items: [{
        xtype: 'form',
        height: 500,
        width: 1000,
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
            plain: true,
            items: [{
                xtype: 'grid',
                reference: 'userselect',
                title: 'Users',
                style: 'font-weight:bold',
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
            },  {
                xtype: 'grid',
                reference: 'roleselect',
                title: 'Roles',
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
                    flex: 1,
                    sortable: true
                },  { 
                    text: 'Role Description', 
                    dataIndex: 'description', 
                    flex: 1, 
                    sortable: true 
                }],
            }],
        }],


    }],
    buttonAlign: 'center',
    buttons: [{
        text: 'Clear',
        handler: 'onGroupClear',
    },  {
        reference: 'verifiedButton',
        text: 'Done',
        handler: 'onUpdate',
        formBind: true,
    }],
});