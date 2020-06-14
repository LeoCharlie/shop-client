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

// 获取商品详情信息
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)

// 添加到购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取购物车列表
export const reqShopCart = () => ajax.get('/cart/cartList')

// 切换购物车选中状态
export const reqCheckChartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)

// 删除购物车项商品
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)