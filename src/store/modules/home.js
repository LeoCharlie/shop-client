/*
    管理首页数据
*/
import {reqCategoryList, reqBanners, reqFloors, reqTodayRe} from "@/api"
export default {
    state: {
        categoryList:[], //分类列表
        banners:[],
        floors:[],
        todayList:[]
    },
    mutations:{
        RECEIVE_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList
        },
        RECEIVE_BANNERS(state,banners){
            state.banners = banners
        },
        RECEIVE_FLOORS(state,floors){
            state.floors = floors
        },
        RECEIVE_TODAY_RE(state,todayList){
            state.todayList = todayList
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
        },
        async getBanners({commit}){
            const res = await reqBanners();
            if(res.code === 200){
                const banners = res.data
                commit("RECEIVE_BANNERS", banners)
            }
        },
        async getFloors({commit}){
            const res = await reqFloors();
            if(res.code === 200){
                const floors = res.data
                commit("RECEIVE_FLOORS", floors)
            }
        },
        async getTodayRecommend({commit}){
            const res = await reqTodayRe();
            if(res.code===200){
                const todayList = res.data
                commit("RECEIVE_TODAY_RE",todayList)
            }
        }
    },
    getters:{

    }
}