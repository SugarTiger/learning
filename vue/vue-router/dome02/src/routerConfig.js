import Home from './components/Home.vue'
import News from './components/News.vue'
import Message from './components/Message.vue'
import About from './components/About.vue'
import NewsDetail from './components/newsDetail.vue'

export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        activeClass: 'active',
        children: [{
                path: 'news',
                component: News,
                children: [{
                    path: 'detail/:id',
                    component: NewsDetail
                }]
            },
            {
                path: 'message',
                component: Message
            }
        ]
    },
    {
        path: '/about',
        component: About,
        activeClass: 'active'
    },
]