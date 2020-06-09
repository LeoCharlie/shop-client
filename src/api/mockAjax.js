import axios from "axios"
import NProgress from "nprogress"

// 1.配置通用的基础路径和超时
// instance是一个能发ajax请求的函数
const instance = axios.create({
    // baseURL: "http://182.92.128.115/api",
    baseURL: '/mock',
    timeout: 15000
})

// 注册请求拦截器
instance.interceptors.request.use(config =>{// 在真正发送请求前执行
    // 2.1显示请求进度条
    NProgress.start();
    return config
})

// 注册响应拦截器
instance.interceptors.response.use(
    response=>{
        // 2.2在请求成功后隐藏请求进度条
        NProgress.done();
        // 3.成功返回的数据应该是响应体数据response.data
        return response.data
    },
    error=>{
        // 2.2在请求失败后隐藏请求进度条
        NProgress.done();

        // 4.统一处理请求错误，具体请求也可以选择处理或不处理
        alert(error.message || "位置错误")
        
        //抛出error或者返回一个失败的promise
        // throw error
        return Promise.reject(error);
        // return error　不可以
    }
)

export default instance