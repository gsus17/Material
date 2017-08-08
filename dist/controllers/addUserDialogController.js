/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            // user:CreateUser;
            this.avatars = [
                'svg-1', 'svg-2', 'svg-3', 'svg-4'
            ];
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        return AddUserDialogController;
    }());
    AddUserDialogController.$inject = ['$mdDialog'];
    ContactManagerApp.AddUserDialogController = AddUserDialogController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map