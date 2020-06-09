/* 
包含项目中所有接口的ajax请求函数
函数返回值是promise，函数内部调用ajax模块发请求

需要根据接口文档，定义接口请求函数
*/

import ajax from "./ajax"
import mockAjax from '@/api/mockAjax'

// Login
export function reqLogin(mobile,password){
    // 作为函数使用
    // return ajax({
    //     url: "/user/passport/login",
    //     method: "POST",
    //     data:{
    //         mobile,password
    //     }
    // })

    // 作为对象使用
    return ajax.post("/user/passport/login",{mobile,password})
}

// 首页三级分类/product/getBaseCategoryList
export const reqCategoryList = ()=> ajax("/product/getBaseCategoryList")

// 访问mock借口的请求函数
export const reqBanners = ()=> mockAjax("/banners")
export const reqFloors = ()=> mockAjax("/floors")
export const reqTodayRe = ()=>mockAjax("/todayRecommend")

// 获取商品列表
// options：包含所有需要传递的搜索请求参数的对象

export const reqProductList = (options) => ajax.post('/list', options)