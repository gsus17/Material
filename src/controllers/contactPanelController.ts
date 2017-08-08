/// <reference path="../_all.ts" />

module ContactManagerApp {
  
  export class ContactPanelController {    
    static $inject = ['userService', '$mdBottomSheet'];
    
    constructor(
      private userService: IPeopleService, 
      private $mdBottomSheet) {
      this.user = userService.selectedUser;
    }
  
    user: IPeople;
    
    actions = [
      { name: 'Phone'       , icon: 'phone' },
      { name: 'Twitter'     , icon: 'twitter' },
      { name: 'Google+'     , icon: 'google_plus' },
      { name: 'Hangout'     , icon: 'hangouts' }
    ];
    
    submitContact(action): void {
      this.$mdBottomSheet.hide(action);
    }
  }
}