Ext.define('LoginDemo.view.group.GroupViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.group',

    data: {
        selectedGroup: null
    },

    stores: {
        Groups: {
            model: 'LoginDemo.model.Group',
            storeId: 'groups',
            autoLoad: true,
            pageSize: 0,
            remoteSort: false,
            remoteFilter: false,
            autoSync: true,
            proxy : {
                type : 'ajax',
                url: 'group.json',
                reader : {
                    type: 'json'
                },
                writer : {
                    writeAllFields : true
                }
            } 
        }
    }
});