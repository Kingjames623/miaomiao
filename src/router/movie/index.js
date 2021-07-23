//此种路由写法，只有在匹配到该路由时，才会加载对应的组件。

export default{
    path:'/movie',
    component:() => import('@/views/Movie'),
    //二级路由写法
    children:[
        {
            path:'city',
            component:() => import('@/components/City')
        },
        {
            path:'nowplaying',
            component:() => import('@/components/NowPlaying')
        },
        {
            path:'comingsoon',
            component:() => import('@/components/ComingSoon')
        },
        {
            path:'search',
            component:() => import('@/components/Search')
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying'
        }
    ]
}