Ext.define('LoginDemo.model.Group', {
	extend: 'Ext.data.Model',
	
    fields: [{
        name: 'group',
        type: 'string'
    }, { 
        name: 'description',
        type: 'string' 
    }, {
        name: 'roles',
        type: 'string' 
    },  {
        name: 'users',
        type: 'string' 
    },  {  
        name: 'modifiedDate',
        type: 'date' 
	}, {  
        name: 'modifiedBy',
        type: 'string' 
    }],
    hasMany: [ 'User', 'Role' ]
})