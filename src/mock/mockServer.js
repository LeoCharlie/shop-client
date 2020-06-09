import Mock from "mockjs"
import banners from '@/mock/banners' //引入的是json，得到的是对应的js数组
import floors from '@/mock/floors'
import todayRecommend from '@/mock/TodayRecommend'

Mock.mock("/mock/banners", {code:200,data:banners})
Mock.mock("/mock/floors", {code:200,data:floors})
Mock.mock("/mock/todayRecommend", {code:200,data:todayRecommend})