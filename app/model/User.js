Ext.define('LoginDemo.model.User', {
	extend: 'Ext.data.Model',
	
    fields: [{
        name: 'username',
        type: 'string'
    }, { 
        name: 'password',
        type: 'string' 
    }, {
        name: 'name',
        type: 'string' 
    }, {  
        name: 'role',
        type: 'string' 
	}, {  
        name: 'email',
        type: 'string' 
	}, {  
        name: 'verified',
		type: 'boolean' ,
		defaultValue: false 
    }],
    belongsTo: 'Group'
})