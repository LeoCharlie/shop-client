/* 
包含项目中所有接口的ajax请求函数
函数返回值是promise，函数内部调用ajax模块发请求

需要根据接口文档，定义接口请求函数
*/

import ajax from "./ajax"

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
export const reqCategorys = ()=> ajax("/product/getBaseCategoryList")