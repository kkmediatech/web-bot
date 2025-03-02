import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'; // Import Vue Router configuration

Vue.use(ElementUI);

new Vue({
  router, // Add the router instance to the Vue instance
  render: (h) => h(App),
}).$mount('#app');