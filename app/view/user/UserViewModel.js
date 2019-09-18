Ext.define('LoginDemo.view.user.UserViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.user',

    data: {
        name: null,
        selectedUser: null
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
