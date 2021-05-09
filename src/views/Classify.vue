<template>
  <div class="classify-wrapper">
    <router-link class="search-btn" tag="div" to="/search">
      <van-icon name="search" />
      <div>苹果特价1元1斤</div>
    </router-link>
    <one-tab></one-tab>
    <template v-if="showContent">
      <side-bar></side-bar>
    </template>
    <van-loading v-else size="2rem" vertical/>
    <goods-list/>
  </div>
</template>

<script>
import OneTab from '@/components/oneTab.vue';
import { mapMutations, mapState, mapActions } from 'vuex';
import SideBar from '../components/sideBar.vue';
import GoodsList from '../components/GoodsList.vue';

export default {
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
  },
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
      sideList: (state) => state.sideList,
    }),
  },
  components: {
    OneTab,
    SideBar,
    GoodsList,
  },
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.classify-wrapper {
  width: 375px;
  .search-btn {
    line-height: 33px;
    width: 355px;
    height: 33px;
    margin: 11px auto;
    border-radius: 10px;
    background: #eee;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
