import Home from '../components/Home.vue'
import About from '../components/About.vue'

export default [
  {path:'/',redirect:'/home'},
  { path: '/home', component: Home },
  { path: '/about', component: About }
]