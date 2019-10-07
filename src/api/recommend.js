/*
 * @Date: 2019-09-11 23:26:50
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-18 23:28:36
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
// import axios from 'axios'
import {discList} from './staticData/discList'
// import { ERR_OK } from 'api/config'

export const getRecommend = () => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export const getDiscList = discList.data.list

// export const getDiscList = () => {
//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
//   })
//   console.log(111)
//   var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
//   axios.get(url, {
//     headers: {
//       referer: 'https://c.y.qq.com/',
//       host: 'c.y.qq.com'
//     },
//     params: data
//   }).then((response) => {
//     console.log(response)
//   }).catch((e) => {
//     console.log(e)
//   })
// }
