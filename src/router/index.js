import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';

Vue.use(Router)

// Create a new route instance and disable
// the navigation to index page using mode.
const router = new Router({
  mode: 'history',
  routes,
});

export default router;
