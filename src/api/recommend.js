/*
 * @Date: 2019-09-11 23:26:50
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-12 00:10:41
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export const getRecommend = () => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export const getDiscList = () => {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    }).then((res) => {
      resolve(res.data)
    })
  })
}
