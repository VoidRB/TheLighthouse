import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProHelpView from '@/views/ProHelpView.vue';
import CommunitiesView from '@/views/CommunitiesView.vue';
import EventsView from '@/views/EventsView.vue';
import SignUpView from '@/views/SignUpView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/ProHelp',
      name: 'ProHelpView',
      component: ProHelpView,
      meta: {
        title: 'ProHelp',
      },
    },
    {
      path: '/Communities',
      name: 'CommunitiesView',
      component: CommunitiesView,
      meta: {
        title: 'Communities',
      },
    },
    {
      path: '/Events',
      name: 'EventsView',
      component: EventsView,
      meta: {
        title: 'Events',
      },
    },
    {
      path: '/SignUp',
      name: 'SignUpView',
      component: SignUpView,
      meta: {
        title: 'SignUp',
      },
    },
    {
      path: '/:catchall(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | TheLighthouse`;
  next();
});
export default router;
