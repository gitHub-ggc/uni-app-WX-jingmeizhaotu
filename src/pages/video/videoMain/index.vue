<template>
    <view class="cataMain">
        <scroll-view enable-flex scroll-y class="cataImg" @scrolltolower="handleScroll">
            <view class="cata_item" v-for="(item,index) in 18" :key="index" @click="handleVideo(imgArr)">
                <image :src="imgArr"></image>
            </view>
        </scroll-view>
    </view>
</template>
<script>
import {requireJMSP1} from "../../../utils/params";
export default {
    props:{
      imgArr:{
          type:String
      }
    },
    watch:{
      imgArr(){
        console.log(666,this.imgArr)
      }
    },
    data(){
        return{
            listData:[]
        }
    },
    mounted(){
   
    },
    methods:{
      handleScroll(){
        console.log("滑动到底部了啦!!!")
      },
      handleVideo(item){
        getApp().globalData.url=this.imgArr;
        uni.navigateTo({
            url:"/pages/videoPlay/index"
        })
      }
    }
}
</script>
<style lang="scss" scroped>
    .cataMain{
        .cataImg{
            display: flex;
            flex-flow: wrap;
            margin-top:30rpx;
            height: calc( 100vh - 90rpx );
            .cata_item{
                width:33%;
                height: 400rpx;
                border:5rpx solid #fff;
                image{
                    width:100%;
                    height: 100%;
                }
            }
        }
    }
</style>