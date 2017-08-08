var ContactManagerApp;
(function (ContactManagerApp) {
    var ContactPanelController = (function () {
        function ContactPanelController(userService) {
            this.userService = userService;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Google+', icon: 'google_plus' },
                { name: 'Hangout', icon: 'hangouts' }
            ];
            this.user = userService.selectedUser;
        }
        ContactPanelController.$inject = ['userService'];
        return ContactPanelController;
    }());
    ContactManagerApp.ContactPanelController = ContactPanelController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=contactPanelController.js.map