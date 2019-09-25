
Ext.define('LoginDemo.view.group.GroupForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'LoginDemo.view.main.MainController',
        'LoginDemo.view.main.MainModel',
    ],
    xtype: 'userform',
    // title: 'Create User',
    controller: 'group',
    viewModel: 'group',
    bodyPadding: '20',
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
    }],
    buttonAlign: 'center',
    buttons: [{
        text: 'Clear',
        handler: 'onFormClear',
    },  {
        reference: 'verifiedButton',
        text: 'Done',
        handler: 'onFormSubmit',
        formBind: true,
    }],
});