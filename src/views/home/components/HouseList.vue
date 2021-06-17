<template>
  <ul class="rent-list">
    <li class="rent-item" v-for="index in 10" :key="index" @click="toDetail">
      <swiper-list></swiper-list>
      <div class="rent-item__info">
        <div class="rent-item__info__up flex a-center">
          <span>江山城1期</span>
          <span>精装2房</span>
          <span>家具齐全</span>
        </div>
        <div class="rent-item__info__bottom flex a-center j-between">
          <div class="rent-item__info-label">
            <div class="rent-item__info-label-item">2堂1厅</div>
          </div>
          <div class="rent-item__info-price">4500/月</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import SwiperList from './SwiperList.vue'
export default {
  name: 'HouseList',
  components: {
    SwiperList
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: '/house'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.rent-list {
  padding: 0 15px;
  .rent-item {
    margin-top: 16px;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 2px 13px 0px rgba(7, 7, 7, 0.04);

    &:last-child {
      margin-bottom: 16px;
    }

    &__info {
      padding: 10px 15px;

      &__up {
        margin-bottom: 10px;
        span {
          font-size: 17px;
          font-weight: bold;
          margin-right: 5px;
        }
      }

      &-label {
        &-item {
          padding: 5px 15px;
          background: #efebff;
          margin-right: 10px;
          font-size: 12px;
          border-radius: 12px;
        }
      }

      &-price {
        color: #ff7031;
        font-size: 17px;
        font-weight: bold;
      }
    }
  }
}
</style>
