<template>
  <div class="custom-uploader">
    <div class="custom-uploader__label">上传图片</div>
    <van-uploader class="uploader" v-model="fileList" max-count="3"/>
  </div>
</template>

<script>
export default {
  name: 'CustomUploader',
  props: {
    fileList: {
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: 'fileList',
    event: 'changeFileList'
  }
}
</script>

<style scoped lang="less">
.custom-uploader {
  margin: 22px 15px 0;
  padding-bottom: 15px;
  .custom-uploader__label {
    font-size: 14.5px;
    display: flex;
    align-items: center;
  }
  .uploader {
    margin-top: 17px;
  }
}
</style>
