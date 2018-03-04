import home from '@/components/home'
import dashboard from '@/components/dashboard'
import blogs from '@/components/blogs'
import aboutus from '@/components/aboutus'

export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/dashboard',
    component: dashboard
  },
  {
    path: '/blogs',
    component: blogs
  },
  {
    path: '/aboutus',
    component: aboutus
  }
];
