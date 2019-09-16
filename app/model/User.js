Ext.define('LoginDemo.model.User', {
	// config: {
	// 	firstName: '',
	// 	lastName: '',
	// 	roles: []
	// },
	 
	// isUserInRole: function(roles) {
	// 	for (var i=0; i<roles.length; i++) {
	// 		if (Ext.Array.contains(this.getRoles(),roles[i])) {
	// 		return true
	// 		}
	// 	}
	// 	return false;
	// },
	 
	// constructor: function(config) {
	// 	this.initConfig(config);
	// 	this.callParent(arguments);
	// }
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
    }],
})