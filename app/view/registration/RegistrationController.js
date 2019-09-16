Ext.define('LoginDemo.view.registration.RegistrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registration',

    onRegistrationSuccess: function() {

        this.getView().destroy();

        Ext.Msg.alert(
            'Account Verification', 
            'An email has been sent to your inbox. Click the link inside the email to verify your account.', 
            Ext.create({
                xtype: 'login'
            }), 
            this
        );

    }
});