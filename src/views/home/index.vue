<template>
  <div class="rent">
    <div class="rent-search flex a-center j-center btn-hover">
      <span>请选择小区</span>
      <div class="icon-triangle"></div>
    </div>
    <van-tabs
      v-model="active"
      color="#008BFF"
      title-active-color="#000"
      line-width="20"
      swipeable
      animated
    >
      <van-tab title="租赁">
        <house-list></house-list>
      </van-tab>
      <van-tab title="二手">
        <house-list></house-list>
      </van-tab>
    </van-tabs>
    <img class="icon-plus" src="@/assets/images/icon-plus.png" @click="showPopup" />
    <van-popup v-model="isShowPopup" round>
      <menu-list :menuList="menuList" @close="closePopup"></menu-list>
      <div class="tc">
        <img class="icon-close" src="@/assets/images/icon-close.png" @click="closePopup" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue'
import HouseList from './components/HouseList.vue'
export default {
  name: 'home',
  components: {
    MenuList,
    HouseList
  },
  data() {
    return {
      active: 0,
      menuList: [
        {
          url: '/deal',
          name: '买卖委托',
          icon: require('@/assets/images/icon-purse.png')
        },
        {
          url: '/rent',
          name: '租赁委托',
          icon: require('@/assets/images/icon-bag.png')
        }
      ],
      isShowPopup: false
    }
  },

  methods: {
    toDetail() {
      this.$router.push({
        path: '/house'
      })
    },
    showPopup() {
      this.isShowPopup = true
    },
    closePopup() {
      this.isShowPopup = false
    }
  }
}
</script>

<style lang="less" scoped>
.rent-search {
  width: 345px;
  height: 43px;
  margin: 15px auto;
  font-size: 14px;
  background: #f5f7f8;
  border-radius: 5px;
  span {
    margin-right: 10px;
  }
}

.rent /deep/ .van-tab {
  flex-shrink: 0;
  flex-grow: 0;
}
.rent /deep/ .van-tab--active {
  font-size: 21px;
  font-weight: bold;
}
.rent /deep/ .van-tab__text {
  width: 60px;
  text-align: center;
  overflow: visible;
}

.icon-plus {
  position: fixed;
  right: 0;
  bottom: 100px;
  width: 75px;
  height: 75px;
}
.icon-close {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}
.icon-triangle {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #000;
  font-size: 0;
  line-height: 0;
}
</style>
