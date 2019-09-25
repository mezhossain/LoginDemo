Ext.define('LoginDemo.view.role.RolesViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.roles',

    data: {
        selectedRole: null
    },

    stores: {
        Roles: {
            model: 'LoginDemo.model.Role',
            storeId: 'roles',
            autoLoad: true,
            pageSize: 0,
            remoteSort: false,
            remoteFilter: false,
            autoSync: true,
            proxy : {
                type : 'ajax',
                url: 'role.json',
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