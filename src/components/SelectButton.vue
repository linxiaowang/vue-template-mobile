<template>
  <div class="select-button">
    <div class="select-button__label"><span class="required" v-if="required">＊</span>{{label}}</div>
    <div class="button-group">
      <van-button
        color="#008BFF"
        block
        class="button"
        v-for="(item, index) in data"
        :key="index"
        :plain="selectKey!=index"
        @click="onClick(item,index)"
      >
        {{item}}
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    selectKey: {
      type: String,
      default: '0',
      require: true
    }
  },
  model: {
    prop: 'selectKey',
    event: 'changeSelectKey'
  },
  methods: {
    onClick (item, index) {
      this.$emit('click', item, index + '')
      // eslint-disable-next-line eqeqeq
      if (this.selectKey != index) {
        this.$emit('change', item, index + '')
      }
      this.$emit('changeSelectKey', index + '')
    }
  }
}
</script>

<style scoped lang="less">
.select-button {
  margin: 22px 15px 0;
  padding-bottom: 15px;
  .select-button__label {
    font-size: 14.5px;
    display: flex;
    align-items: center;
    .required {
      color: #FF5B5B;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .button-group {
    margin-top: 17px;
    display: flex;
    .button {
      width: 105px;
      height: 37px;
      border-radius: 5px;
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>
