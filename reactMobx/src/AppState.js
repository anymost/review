import { observable, computed } from 'mobx';

class AppState {
  @observable timer = 0;

  @observable price = 10;

  @computed get total (){
    return this.timer * this.price;
  }

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
