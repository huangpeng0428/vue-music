<!--
 * @Date: 2019-09-08 18:48:02
 * @LastEditors: PoloHuang
 * @LastEditTime: 2019-09-12 23:38:31
 -->
<template>
  <div class="recommend" ref="recommend">
    <!-- <scroll ref="scroll" class="recommend-content" :data="discList"> -->
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
        <slider>
            <div v-for="(item, index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img class="needsclick" :src="item.picUrl">
              </a>
            </div>
        </slider>
      </div>
    </div>
    <!-- </scroll> -->
  </div>
</template>
<script>
import { getRecommend, getDiscList } from 'api/recommend'
import Slider from 'base/slider/slider'
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
      }
    },

    _getDiscList () {
      console.log(getDiscList)
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable';
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
</style>
