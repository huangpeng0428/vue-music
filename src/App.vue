<!--
 * @Date: 2019-09-07 22:35:20
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-08 18:58:45
 -->

<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  },
  name: 'App'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
