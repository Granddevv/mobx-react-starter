import { observable, action } from "mobx";


export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable testval;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.testval = "Main footer";
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
