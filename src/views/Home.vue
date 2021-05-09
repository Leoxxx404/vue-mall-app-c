<template>
  <div class="home">
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import tabBar from '@/components/TabBar.vue';

export default {
  name: 'Home',
  components: {
    tabBar,
  },
};
</script>
