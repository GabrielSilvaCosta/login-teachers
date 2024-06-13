import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import TeacherList from '../components/TeacherList.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: TeacherList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
