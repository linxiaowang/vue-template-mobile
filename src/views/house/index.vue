<template>
  <div>
    <swiper-list :imgList="imgList"></swiper-list>

    <div class="content">
      <info-card></info-card>
      <div class="house-price flex a-center j-between">
        <div class="flex a-center j-between">
          <img class="icon-tag" src="@/assets/images/icon-tag.png" alt="" />
          <span class="house-price-label">房屋总价</span>
        </div>
        <span>￥1810000.00</span>
      </div>

      <div class="detail">
        <div class="detail-title flex a-center">详细信息</div>
        <ul class="detail-content">
          <li class="detail-item van-hairline--bottom">限制：不可养宠物</li>
          <li class="detail-item van-hairline--bottom">限制：不可养宠物</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from './components/InfoCard.vue'
import SwiperList from './components/SwiperList.vue'
export default {
  components: {
    InfoCard,
    SwiperList
  },
  data() {
    return {
      imgList: [
        {
          url: 'http://benyouhuifile.it168.com/forum/201112/08/223609dcsxjo2zboc9x57x.jpg'
        },
        {
          url: 'http://benyouhuifile.it168.com/forum/201112/08/223603omqrwfxxmwhsvfrn.jpg'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

.content {
  padding: 0 15px;
}

.house-price {
  height: 50px;
  padding: 0 14px;
  border-radius: 5px;
  background-color: #f7f8fc;
  &-label {
    font-size: 14px;
    color: #6d6d6d;
  }
  &-price {
    font-size: 19px;
    color: #363636;
  }
}

.detail {
  margin-top: 20px;
  &-title {
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: bold;

    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 17px;
      margin-right: 10px;
      background: #008bff;
      border-radius: 2px;
    }
  }

  &-content {
    padding: 0 13px;
    background: #f7f8fc;
    border-radius: 5px;
  }

  &-item {
    padding: 15px 0;
    font-size: 14px;
  }
}

.icon-tag {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
</style>
