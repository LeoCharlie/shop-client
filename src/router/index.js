import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 保存原本的push函数
const originalPush = VueRouter.prototype.push
// 重写方法
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
    // 1.如果没有指定回调函数，需要调用原本的push后catch来处理错误的promise
    // 需要使用call来指定this，需要返回promise
    if(!onComplete && !onAbort){
        return originalPush.call(this,location).catch(err=>err)
    }else{
        // 2.如果传入了，本身没有问题，直接调用原本的push就可以
        // originalPush.call(this,location, onComplete, onAbort)
    }
}

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Search from "@/pages/Search"
import Register from "@/pages/Register"

export default new VueRouter({
    mode:"history",
    routes:[
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
    ]
})