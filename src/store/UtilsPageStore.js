/**
 * 工具类
 */
import {BasePageStore}  from './BasePageStore';
import {observable, action} from 'mobx';

export class UtilsPageStore extends BasePageStore {
  @observable chooseArea = {province: '未选择', city: '未选择', area: '未选择'};

  @action
  setChooseArea(area) {
    this.chooseArea = area
  }
}