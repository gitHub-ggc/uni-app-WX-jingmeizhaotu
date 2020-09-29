<template>
    <scroll-view scroll-y class="album" v-if="homeTitleData.length> 0" @scrolltolower="handleScroll">
        <!-- 推荐 -->
        <view class="album_image1">
           <navigator url="/pages/recommendDec/index" v-for="(item) in homeTitleData" :key="item.id" class="images1">
               <image :src="item.url"></image>
           </navigator> 
        </view>
        <!-- 月份 -->
        <view class="album_item2">
            <view class="album_item2_title">
                <view class="album_item2_title2">
                    <view class="album_item2_title4">
                        <text>{{timeD}}</text>
                        /{{timeM}} 月
                    </view>
                    <view class="album_item2_title5">你负责美丽就好</view>
                </view>  
                <view class="album_item2_title3">更多 ></view>
            </view>
            <view class="album_item3">
                <view class="album_img" v-for="(item,index) in dataImg" :key="item.id">
                    <lian-jie :index="index" :imageArr="dataImg">
                       <image :src="item.url" mode="scaleToFill"></image>
                    </lian-jie>
                </view>
            </view>
        </view>
        <!-- 热门 -->
        <view class="hot">
            <view class="hot_title">热门</view>
            <view class="hot_content">
                <view class="hot_img" v-for="(item,index) in hots" :key="item.id">
                     <lian-jie :index="index" :imageArr="hots">
                        <image :src="item.url" mode="scaleToFill"></image>
                    </lian-jie>
                </view>
            </view>
        </view>
    </scroll-view>
</template>
<script>
import {requiretitleData} from "../../../utils/params";
import moment from "moment";
import lianJie from "@/component/lianjie";
export default {
   data(){
      return{
         homeTitleData:[],
         timeM:null,
         timeD:null,
         dataImg:[],
         hots:[],
         num:0
      }
  },
   mounted(){
      this.requireData(); 
       //动态修改标题
       uni,wx.setNavigationBarTitle({
           title: '推荐',
       });   
  },
  methods:{
      handleScroll(){
          clearTimeout(this.times);
          this.times=setTimeout(() => {
             this.requireData(); 
          }, 1000);
      },
      requireData(){
        this.num++;
        if(this.num >=5){
          uni.showToast({
              title:"没有了!"
          })
        }else{
          this.https({
              url:"/homepage/vertical"
          }).then(result=>{
              let data = result;
          }).catch(err=>{
              this.homeTitleData=requiretitleData().titleImg;
              this.timeM=moment(requiretitleData().time).format("MM");
              this.timeD=moment(requiretitleData().time).format("DD");
              this.dataImg=requiretitleData().dataImg;
              this.hots=[...this.hots,...requiretitleData().hots];
          })
        }
      }
  },
  components:{
      lianJie
  }
}
</script>
<style lang="scss" scoped>
    .album{
        height: calc(100vh - 72rpx);
        .album_image1{
            padding:20rpx;
            padding-right: 0;
            padding-left:30rpx;
            padding-bottom: 0;
            display: flex;
            flex-wrap: wrap;
            &:nth-child(1){
                margin-right: 20rpx;
            }
            .images1{
               width:48%;
               height: 300rpx;
               margin-right: 10rpx;
               margin-bottom: 10rpx;
               image{
                  width:100%;
                  height: 100%;
               }
            }
        }
        .album_item2{
            padding:0 20rpx;
            .album_item2_title{
                display: flex;
                justify-content: space-between;
                font-size:22rpx;
                margin-bottom: 20rpx;
                .album_item2_title2{
                    font-size:24rpx;
                    display: flex;
                    .album_item2_title4{
                        margin-right: 30rpx;
                        color:#CA6B8C;
                        font-size:20rpx;
                        text{
                            font-size:26rpx;
                        }
                    }
                }
                .album_item2_title3{
                    color:#CA6B8C;
                }
            }
            .album_item3{
                display: flex;
                flex-wrap: wrap;
                .album_img{
                    width:32%;
                     &:nth-child(1){
                         margin-right: 10rpx;
                         margin-bottom: 10rpx;
                     }
                    &:nth-child(2){
                        margin-right: 10rpx;
                        margin-bottom: 10rpx;
                    }
                    &:nth-child(3){
                        margin-bottom: 10rpx;
                    }
                    &:nth-child(4){
                        margin-right: 10rpx;
                    }
                    &:nth-child(5){
                        margin-right: 10rpx;
                    }
                }
            }
        }
        .hot{
            margin-top:20rpx;
            .hot_title{
                font-size:24rpx;
                padding-left:20rpx;
                border-left: 10rpx solid red;
                margin-left:20rpx;
                padding-bottom: 20rpx;
                font-weight: 900;
            }
            .hot_content{
                display: flex;
                flex-wrap: wrap;
                .hot_img{
                    width:32%;
                    border:5rpx solid #fff;
                }
            }
        }
    }
</style>