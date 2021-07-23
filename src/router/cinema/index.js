//此种路由写法，只有在匹配到该路由时，才会加载对应的组件。

export default{
    path:'/cinema',
    component:() => import('@/views/Cinema')
}