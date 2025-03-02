import Vue from 'vue';
import Router from 'vue-router';
import TableComponent from '@/components/TableComponent.vue';
import DetailsComponent from '@/components/DetailsComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Optional: Use HTML5 History Mode
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TableComponent,
    },
    {
      path: '/details',
      name: 'Details',
      component: DetailsComponent,
      props: true, // Pass route parameters as props
    },
  ],
});