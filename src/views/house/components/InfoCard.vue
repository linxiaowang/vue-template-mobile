<template>
  <div class="house-info">
    <div class="house-info__up flex a-center">
      <span>江山城1期</span>
      <span>精装2房</span>
      <span>家具齐全</span>
    </div>
    <div class="house-info__bottom flex a-center j-between">
      <div class="flex a-center">
        <div class="house-info-label">
          <div class="house-info-label-item">2堂1厅</div>
        </div>
        <div class="house-info-label">
          <div class="house-info-label-item">120平</div>
        </div>
      </div>
      <div class="house-info-price">4500/月</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard'
}
</script>

<style lang="less" scoped>
.house-info {
  padding: 20px 0px;

  &__up {
    margin-bottom: 15px;
    span {
      font-size: 17px;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  &-label {
    &-item {
      padding: 5px 15px;
      margin-right: 10px;
      font-size: 12px;
      color: #6145db;
      background: #efebff;
      border-radius: 12px;
    }
    &:nth-child(2) {
      .house-info-label-item {
        color: #0059ff;
        background-color: #ebf2ff;
      }
    }
  }

  &-price {
    color: #ff7031;
    font-size: 17px;
    font-weight: bold;
  }

  &-area {
    color: #ff7031;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
