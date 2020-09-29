<template>
    <view @click="handleClick">
        <slot></slot>
    </view>
</template>
<script>
import {requireImgDectail} from "../utils/params"
import moment from "moment";
moment.locale("zh-cn");
export default {
    props:{
       imageArr:{
           type:Array,
           value:[]
       },
       index:{
           type:Number,
       }
    },
    data(){
        return{

        }
    },
    mounted() {

    },
    methods:{
        handleClick(){
            // 将数据缓存起来
            getApp().globalData.imgList=this.imageArr;
            getApp().globalData.imgIndex=this.index;
            getApp().globalData.data=requireImgDectail();
            getApp().globalData.data.age=moment(requireImgDectail().tinu).fromNow();
            // 跳转图片详情页面
            uni.navigateTo({
                url:"/pages/imgDetail/index"
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>