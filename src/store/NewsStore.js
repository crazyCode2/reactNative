/**
 * 新闻页 数据
 */
import { BasePageStore } from './BasePageStore';
import { Toast } from 'teaset';
import { HttpUtil } from '../utils/HttpUtil';
import { WANGYINEWS } from "../base/Constant";

export class NewsStore extends BasePageStore {
  constructor() {
    super([]);
    this.loadData()
  }

  loadData() {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYINEWS.url, WANGYINEWS.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }
}