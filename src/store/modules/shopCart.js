
import {reqShopCart, reqAddToCart} from "@/api"
const state = {
    cartList : []
}
const mutations = {
    RECEIVE_CART_LIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({commit}){
        const res = reqShopCart()
        if(res.code === 200){
            const cartList = res.data
            commit("RECEIVE_CART_LIST",cartList)
        }
    },
    async addToCart({commit},{skuId,skuNum}){
        const res = await reqAddToCart(skuId,skuNum)
        if (res.code !== 200) {
            throw new Error("添加失败")
        }
        //成功时候返回的是undefined
    }
}
const getters = {

}

export default{
    state,
    mutations,
    actions,
    getters
}