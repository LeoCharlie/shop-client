import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Detail from '@/pages/Detail'
import ShopCart from '@/pages/ShopCart'
import AddCartSuccess from '@/pages/AddCartSuccess';

export default [
    {
        path:"/",
        component:Home
    },
    {
        path:"/login",
        component:Login,
        meta:{
            isHideFooter: true
        }
    },
    {
        path:"/search/:keyword?", //带: 是params参数   后面加?params参数可传可不传
        component:Search,
        name:"search", //一旦有params参数，用push()必须有name配置
        // 将路由参数映射为props传递给路由对象
        props:route=>({
            keyword3:route.params.keyword,
            keyword4:route.query.keyword2
        })
    },
    {
        path:"/register",
        component:Register,
        meta:{
            isHideFooter: true
        }
    },
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess
    },
    {
        path: '/shopcart',
        component: ShopCart
    },
]