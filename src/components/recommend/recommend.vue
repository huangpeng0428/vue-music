<!--
 * @Date: 2019-09-08 18:48:02
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-12 00:12:17
 -->
<template>
    <div class="recommend" ref="recommend">
        <scroll ref="scroll" class="recommend-content" :data="discList">
            <div>
                <slider>
                    <div v-for="(item, index) in recommends" :key="index">
                        <a :href="item.linkUrl">
                            <img class="needsclick" @load="loadImage" :src="item.picUrl">
                        </a>
                    </div>
                </slider>
            </div>
        </scroll>
    </div>
</template>
<script>
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  mounted () {
    this._getRecommend()

    this._getDiscList()
  },

  methods: {
    async _getRecommend () {
      let res = await getRecommend()
      if (res.code === ERR_OK) {
        this.recommends = res.data.slider
        console.log(this.recommends)
      }
    },

    _getDiscList () {
      console.log(getDiscList)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
