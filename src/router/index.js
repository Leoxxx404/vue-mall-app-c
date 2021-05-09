import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Classify from '@/views/Classify.vue';
import Shopping from '@/views/Shopping.vue';
import Search from '@/views/Search.vue';

VueRouter.prototype.back = false;
VueRouter.prototype.goBack = function goBack() {
  this.back = true;
  this.go(-1);
};

Vue.use(VueRouter);

const routes = [{
  path: '/home',
  component: Home,
  redirect: '/home/classify',
  children: [{
    path: 'classify',
    name: 'classify',
    component: Classify,
  }, {
    path: 'shopping',
    component: Shopping,
  }],
}, {
  path: '*',
  redirect: '/home/classify',
},
{
  path: '/search',
  name: 'search',
  component: Search,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
