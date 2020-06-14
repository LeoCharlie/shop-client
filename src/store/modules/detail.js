
import {reqDetailInfo} from "@/api"

const state={
    detailInfo : {}
}
const mutations={
    RECEIVE_DETAIL_INFO(state,detailInfo){
        state.detailInfo = detailInfo
    }
}
const actions={
    async getDetailInfo({commit},skuId){
        const res = await reqDetailInfo(skuId)
        if(res.code === 200){
            const detailInfo = res.data
            commit("RECEIVE_DETAIL_INFO",detailInfo)
        }
    }
}
const getters={
    categoryView(state){
        return state.detailInfo.categoryView? state.detailInfo.categoryView:{}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo? state.detailInfo.skuInfo:{}
    },
    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList? state.detailInfo.spuSaleAttrList:[]
    },
    skuImageList (state) {
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}