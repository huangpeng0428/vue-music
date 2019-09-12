/*
 * @Date: 2019-09-12 23:56:25
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-12 23:58:28
 */
const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
module.exports = {
  hasClass,
  addClass
}
