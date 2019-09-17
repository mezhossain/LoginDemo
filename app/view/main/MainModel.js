Ext.define('LoginDemo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'LoginDemo',
        selectedUser: null,
    },

    stores: {
        Users: {
            model: 'LoginDemo.model.User',
            storeId: 'users',
            autoLoad: true,
            pageSize: 0,
            remoteSort: false,
            remoteFilter: false,
            autoSync: true,
            proxy : {
                type : 'ajax',
                url: 'cred.json',
                reader : {
                    type: 'json',
                    rootProperty : 'jobs'
                },
                writer : {
                    writeAllFields : true
                }
            } 
        }
    }

});
