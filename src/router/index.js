import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from "../pages/Home"
import Login from "../pages/Login"
import Search from "../pages/Search"
import Register from "../pages/Register"

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/search",
            component:Search
        },
        {
            path:"/register",
            component:Register
        },
    ]
})