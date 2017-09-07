const routers = [
    {
        path: '/',
        name: 'home',
        component: require('./views/home')
    },
    {
        path: '/list',
        name: 'list',
        component: require('./views/list')
    },
    {
        path: '/about',
        name: 'about',
        component: require('./views/about')
    },
    {
        path: '/login',
        name: 'login',
        component: require('./views/login')
    },
    {
        path: '/message',
        name: 'message',
        component: require('./views/message')
    },
    {
        path: '/topic/:id',
        name: 'topic',
        component: require('./views/topic')
    },
    {
        path: '*',
        component: require('./views/home')
    }
]

export default routers
