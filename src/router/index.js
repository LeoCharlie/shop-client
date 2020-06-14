import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes'
Vue.use(VueRouter)

// 保存原本的push函数
const originalPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重写方法
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
    // 1.如果没有指定回调函数，需要调用原本的push后catch来处理错误的promise
    // 需要使用call来指定this，需要返回promise
    if(!onComplete && !onAbort){
        return originalPush.call(this,location).catch(err=>err)
    }else{
        // 2.如果传入了，本身没有问题，直接调用原本的push就可以
        originalPush.call(this,location, onComplete, onAbort)
    }
}
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (!onComplete && !onAbort) {
        return originReplace.call(this, location).catch(error => {
        console.log('---replace', error.message)
        })
    } else {
        originReplace.call(this, location, onComplete, onAbort)
    }
}



export default new VueRouter({
    mode:"history",
    routes,
     // 路由跳转后, 滚动条停留在最上面(0,0)
    scrollBehavior () {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
    }
})