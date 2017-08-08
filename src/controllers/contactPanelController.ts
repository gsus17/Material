module ContactManagerApp {

  export class ContactPanelController {
    static $inject = ['userService'];

    constructor(
      private userService: IPeopleService) {
      this.user = userService.selectedUser;
    }

    user: IPeople;

    actions = [
      { name: 'Phone', icon: 'phone' },
      { name: 'Twitter', icon: 'twitter' },
      { name: 'Google+', icon: 'google_plus' },
      { name: 'Hangout', icon: 'hangouts' }
    ];
  }
}
