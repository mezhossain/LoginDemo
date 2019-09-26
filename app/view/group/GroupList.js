Ext.define('LoginDemo.view.group.GroupList', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        'Ext.toolbar.Paging',
    ],
    xtype: 'grouplist',

    title: 'Groups',
    controller: 'group',
    viewModel: { type: 'group' },
    bind: { store: '{Groups}', selection: '{selectedGroup}' },
    scrollable: true,
    reference: 'grouplist',

    beforeRender: function () {
        var me = this;

        var d = me.lookupReference('dButton');
        d.setHandler('deleteGroup');
        d.setBind({
            disabled: '{!selectedGroup}'
        });

        var u = me.lookupReference('uButton');
        u.setHandler('updateGroup');
        u.setBind({
            disabled: '{!selectedGroup}'
        });

        me.callParent(arguments);
    },

    columns: [
        { 
            text: 'Group Name', 
            dataIndex: 'group', 
            flex: 0.3
        },  { 
            text: 'Group Description', 
            dataIndex: 'username', 
            flex: 1, 
            sortable: true 
        },  { 
            text: 'Last Modified', 
            dataIndex: 'modifiedDate', 
            vtype: 'date',
            flex: 0.3, 
            sortable: true,
        },  { 
            text: 'Modified By', 
            dataIndex: 'modifiedBy', 
            sortable: true
        }
    ],
});
