/*
    管理首页数据
*/
import {reqCategoryList} from "@/api"
export default {
    state: {
        categoryList:[], //分类列表
        ob:{},
        str:"艾克"
    },
    mutations:{
        RECEIVE_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList
        }
    },
    actions:{
        // 请求获取分类列表的异步action
        async getCategoryList({commit}){
            // 调用接口发送ajax
            const res = await reqCategoryList()
            // 取出数据，提交给mutation
            if(res.code === 200){
                const categoryList = res.data.filter((item, index) => index < 15)
                commit("RECEIVE_CATEGORY_LIST", categoryList)
            }
        }
    },
    getters:{

    }
}