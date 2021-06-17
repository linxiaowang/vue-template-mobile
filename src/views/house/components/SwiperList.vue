<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in imgList" :key="index">
      <img class="house-pic" :src="item.url" @click="imgPreview(item.url)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  props: {
    imgList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    imgPreview(url) {
      const images = this.imgList.map(item => {
        return item.url
      })
      ImagePreview(
        {
          images,
          startPosition: images.indexOf(url)
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.house-pic {
  width: 375px;
  height: 240px;
}
</style>
