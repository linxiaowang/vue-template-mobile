<template>
  <div :class="['custom-cell', { 'van-hairline--bottom': bordered }]">
    <div class="custom-cell__label">
      <span class="required" v-if="required">＊</span>
      {{ label }}
    </div>
    <van-cell is-link @click="onClick">
      <template #default>
        <span :class="value ? 'black' : 'gray'">{{
          value ? value : placeholder
        }}</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'CustomCell',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="less">
.black {
  color: #2b2b2b;
}
.gray {
  color: #c7c7cb;
}
.custom-cell {
  margin: 22px 15px 0;
  padding-bottom: 15px;
  .custom-cell__label {
    font-size: 14.5px;
    display: flex;
    align-items: center;
    .required {
      color: #ff5b5b;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .van-cell {
    padding: 0;
    margin-top: 17px;
  }
  span {
    font-size: 16px;
  }
  /deep/.van-field__control {
    font-size: 16px;
  }
}
</style>
