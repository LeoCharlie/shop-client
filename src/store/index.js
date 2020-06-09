/*

*/
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// import HOME from "./modules/home"
// import USER from "./modules/user"
import modules from "./modules"
// const state = {}
// const mutations = {}
// const actions = {}
// const getters = {}
export default new Vuex.Store({
    // state, 
    // mutations,
    // actions,
    // getters,
    modules
}) 

/* 
    vuex管理的总state的结构：
    {
        HOME:{
            categoryList:[], //分类列表
            ob:{},
            str:"艾克"
        }
        USER:{
            userInfo:{}
        }
    }
*/