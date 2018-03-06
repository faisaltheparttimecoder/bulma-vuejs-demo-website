import home from '@/components/Home'
import dashboard from '@/components/Dashboard'
import blogs from '@/components/Blogs'
import showblog from '@/components/ShowBlog'
import aboutus from '@/components/AboutUs'
import team from '@/components/Team'
import contact from '@/components/Contact'

export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/dashboard/:menu',
    component: dashboard
  },
  {
    path: '/blogs',
    component: blogs
  },
  {
    path: '/blog/:id/:users',
    component: showblog
  },
  {
    path: '/aboutus',
    component: aboutus
  },
  {
    path: '/team',
    component: team
  },
  {
    path: '/contact',
    component: contact
  }
];
