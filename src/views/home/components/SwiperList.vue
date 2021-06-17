<template>
  <div class="rent-swiper">
    <van-swipe @change="onChange" lazy-render>
      <van-swipe-item v-for="(item, index) in imgList" :key="index">
        <img class="rent-swiper-pic" :src="item.url" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{ imgList.length }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {

  props: {
    imgList: {
      type: Array,
      default: () => [
        {
          url: require('@/assets/images/test.jpg')
        },
        {
          url: require('@/assets/images/test.jpg')
        }
      ]
    }
  },

  data() {
    return {
      current: 0
    }
  },

  methods: {
    onChange(index) {
      this.current = index
    }
  }
}
</script>

<style lang="less" scoped>
.custom-indicator {
  position: absolute;
  left: px;
  top: 5px;
  padding: 3px 12px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.rent-swiper {
  &-pic {
    width: 345px;
    height: 160px;
    border-radius: 8px 8px 0 0;
  }
}
</style>
