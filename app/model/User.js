Ext.define('LoginDemo.model.User', {
	extend: 'Ext.data.Model',
	// config: {
	// 	username: '',
	// 	password: '',
	// 	name: '',
	// 	role: ''
	// },
	 
	// isUserInRole: function(roles) {
	// 	for (var i=0; i<roles.length; i++) {
	// 		if (Ext.Array.contains(this.getRoles(),roles[i])) {
	// 		return true
	// 		}
	// 	}
	// 	return false;
	// },
	 
	
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
	}],
	// constructor: function(config) {
	// 	this.initConfig(config);
	// 	this.callParent(arguments);
	// }
})