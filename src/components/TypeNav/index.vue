<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">

      <div @mouseleave="hideCategory" @mouseenter="showFirstCategory">
        <h2 class="all">全部商品分类</h2>
        <transition name="move">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2"  @click="toSearch">
              <div class="item" 
              :class="{item_on: index===currentIndex}" 
              v-for="(category,index) in categoryList" 
              :key="category.categoryId"
              @mouseenter="showSubScategorys(index)"
              >
                <h3>
                  <a href="javascript:;" :data-categoryName="category.categoryName" :data-category1Id="category.categoryId">{{category.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="secondCategory in category.categoryChild" :key="secondCategory.categoryId">
                      <dt>
                        <a href="javascript:;" :data-categoryName="secondCategory.categoryName" :data-category2Id="secondCategory.categoryId">{{secondCategory.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="thirdCategory in secondCategory.categoryChild" :key="thirdCategory.categoryId">
                          <a href="javascript:;" :data-categoryName="thirdCategory.categoryName" :data-category3Id="thirdCategory.categoryId">{{thirdCategory.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// import _ from "lodash" //引入整个lodash，文件较大
import throttle from 'lodash/throttle' //只引入需要的
import {mapState,mapActions} from "vuex"
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -2,
      isShowFirst:this.$route.path === "/"
    }
  },
  computed:{
    // 1.
    // categoryList(){
    //   return this.$store.state.HOME.categoryList
    // },
    
    // 2.
    // ...mapState(["categoryList"]) //是直接在总state里找，所以得不到数据

    //3. 回调函数接受的是总state
    ...mapState({
      categoryList: state => state.HOME.categoryList
    })
  },
  mounted(){
    // 通过store对象的dispatch()来触发异步action getCategoryList执行请求获取数据
    // this.$store.dispatch("getCategoryList")
    this.getCategoryList()
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    showSubScategorys: throttle(function (index) {
      if(this.currentIndex !== -2){
        this.currentIndex = index
      }
    }, 200),
    
    // toSearch({categoryName,category1Id,category2Id,category3Id}){
    //   // 准备query
    //   const query = {
    //     categoryName,
    //   }
    //   if(category1Id){
    //     query.category1Id = category1Id
    //   }else if(category2Id){
    //     query.category2Id = category2Id
    //   }else if(category3Id){
    //     query.category3Id = category3Id
    //   }
    //   const location = {
    //     name:"search",
    //     query
    //   }
    //   this.$router.push(location)
    // }

    toSearch(event){
      // 读取data自定义属性值
      const {categoryname,category1id,category2id,category3id} = event.target.dataset
      const query = {
          categoryName:categoryname,
      }
      if(!categoryname) return

      if(category1id){
        query.category1Id = category1id
      }else if(category2id){
        query.category2Id = category2id
      }else if(category3id){
        query.category3Id = category3id
      }
      const location = {
        name:"search",
        query
      }
      this.$router.push(location)

      // 自定隐藏
      this.hideCategory()
    
    },
    showFirstCategory(){
      this.currentIndex = -1
      this.isShowFirst = true
    },
    hideCategory(){
      this.currentIndex = -2
      if(this.$route.path !== "/"){
        this.isShowFirst = false
      }
    }
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      //显示时
      &.move-enter-active,&.move-leave-active{
        transition: all .3s;
      }
      // 隐藏时
      &.move-enter,&.move-leave-to{
        opacity: 0;
        height: 0;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
