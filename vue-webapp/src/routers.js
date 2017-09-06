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
    }
]

export default routers
