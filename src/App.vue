<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="include">
        <router-view class="router-view" v-if="$route.meta.keepAlive" />
        <router-view class="router-view" v-if="!$route.meta.keepAlive" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {

  data () {
    return {
      transitionName: 'slide-left',
      include: []
    }
  },

  watch: {
    $route(to, from) {
      this.handlePageCache(to, from)
      this.handlePageTransition(to, from)
    }
  },

  methods: {
    handlePageCache(to, from) {
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name)
      }
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        var index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index, 1)
      }
    },
    handlePageTransition(to, from) {
      if (to.meta.deepth > from.meta.deepth) {
        this.transitionName = 'slide-left' // 向左滑动
      } else if (to.meta.deepth < from.meta.deepth) {
        // 由次级到主级
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = '' // 同级无过渡效果
      }
    }
  }
}
</script>

<style lang="less" scoped>
.router-view {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  position: absolute;
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
