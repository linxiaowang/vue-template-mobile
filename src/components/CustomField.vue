<template>
  <div class="custom-field van-hairline--bottom">
    <div class="custom-field__label">
      <span class="required" v-if="required">＊</span>
      {{ label }}
    </div>
    <van-field
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
      :rules="[{ required, message: '请填写' + placeholder }]"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomField',
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
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  methods: {
    onInput(val) {
      this.$emit('changeValue', val)
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang="less">
.custom-field {
  margin: 22px 15px 0;
  padding-bottom: 15px;
  .custom-field__label {
    font-size: 14.5px;
    display: flex;
    align-items: center;
    .required {
      color: #ff5b5b;
      font-size: 12px;
      font-weight: bold;
    }
  }
  span {
    font-size: 16px;
  }
  .van-cell {
    padding: 0;
    margin-top: 17px;
  }
  /deep/.van-field__control {
    font-size: 16px;
  }
}
</style>
