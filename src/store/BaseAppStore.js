/**
 * 基础数据
 */
import {UserStore} from './UserStore'
import {ShopCarStore} from './ShopCarStore'

export class BaseAppStore {
  userStore: UserStore;
  shopCar: ShopCarStore;

  constructor() {
    this.userStore = new UserStore();
    this.shopCar = new ShopCarStore();
  }
}