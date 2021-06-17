<template>
  <ul class="rent-menu flex a-center j-around">
    <li
      class="rent-menu__item flex a-center"
      v-for="item in menuList"
      :key="item.name"
      @click="navigatePage(item.url)"
    >
      <div class="rent-menu-top">
        <img class="rent-menu-icon" :src="item.icon" />
      </div>
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuList',
  components: {},
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    navigatePage(url) {
      this.$emit('close')
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<style lang="less" scoped>
.rent-menu {
  width: 345px;
  padding: 15px;
  font-size: 14px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    &:nth-child(1) {
      .rent-menu-top {
        background-color: #ffecde;
      }
    }

    &:nth-child(2) {
      .rent-menu-top {
        background-color: #e4e9ff;
      }
    }
  }

  &-icon {
    width: 24px;
    height: 24px;
  }

  &-top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
}
</style>
