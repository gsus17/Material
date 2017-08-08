module ContactManagerApp {

  export class MainController {
    static $inject = [
      'userService',
      '$mdSidenav',
      '$mdToast',
      '$mdDialog',
      '$mdMedia',
      '$mdBottomSheet'];

    constructor(
      private userService: IPeopleService,
      private $mdSidenav: angular.material.ISidenavService,
      private $mdToast: angular.material.IToastService,
      private $mdDialog: angular.material.IDialogService,
      private $mdMedia: angular.material.IMedia,
      private $mdBottomSheet: angular.material.IBottomSheetService) {
      var self = this;

      this.userService
        .loadAllUsers()
        .then((users: IPeople[]) => {
          self.users = users;
          self.selected = users[0];
          self.userService.selectedUser = self.selected;
        });
    }

    tabIndex: number = 0;
    searchText: string = '';
    users: IPeople[] = [];
    selected: IPeople = null;

    toggleSideNav(): void {
      this.$mdSidenav('left').toggle();
    }

    selectUser(user: IPeople): void {
      this.selected = user;
      this.userService.selectedUser = user;

      var sidenav = this.$mdSidenav('left');
      if (sidenav.isOpen()) {
        sidenav.close();
      }

      this.tabIndex = 0;
    }


    getNumber(value: number): any {
      const ret: any[] = []
      for (let cont = 0; cont < value; cont++) {
        ret.push(cont)
      }

      return ret;
    }
  }
}
