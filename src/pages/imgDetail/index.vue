<template>
    <view class="imageDetail" v-if="zhuanJi.children">
        <view class="imageDetail_title">
            <view class="imageDetail_title_img">
                <image :src="initData.imgTitle"></image>
            </view>
            <view class="imageDetail_title_right">
                <view class="imageDetail_title_text1">{{initData.title1}}</view>
                <view class="imageDetail_title_text2">{{initData.age}}</view>
            </view>
        </view>
        <view class="imageDetail_banner">
            <image :src="initData.bannerImg"></image>
        </view>
        <view class="imageDetail_item3">
            <view class="imageDetail_dz">
                <view class="iconfont icon-dianzan">10000</view>
            </view>
            <view class="imageDetail_sc">
                <view class="iconfont icon-aixin"> 收藏</view>
            </view>
        </view>
        <view class="imageDetail_item4">
            <view class="imageDetail_item4_1">{{zhuanJi.title}}</view>
            <view class="imageDetail_item4_2" v-for="item in zhuanJi.children" :key="item.id">
                <view class="imageDetail_item4_3">
                    <image :src="item.img"></image>
                </view>
                <view class="imageDetail_item4_4">
                    <view class="imageDetail_item4_5">{{item.title1}}</view>
                    <view class="imageDetail_item4_7">
                        <view class="imageDetail_item4_6">{{item.title2}}</view>
                        <view class="iconfont icon-youjiantou"></view>
                    </view>
                </view>
            </view>
        </view>
        <view class="imageDetail_item5">
            <view class="imageDetail_item5_1">
                <view class="iconfont icon-remen1"></view>
                <view class="imageDetail_item5_2">{{zuiXin.title}}</view>
            </view>
            <view class="imageDetail_item5_3" v-for="item in zuiXin.children" :key="item.id">
                <view class="imageDetail_item5_4">
                    <image :src="item.img"></image>
                </view>
                <view class="imageDetail_item5_5">
                   <view class="imageDetail_item5_6">{{item.title1}}</view>
                   <view class="imageDetail_item5_7">{{item.title2}}</view>
                   <view class="imageDetail_item5_9">
                      <view class="imageDetail_item5_8">{{item.title3}}</view>
                      <view class="iconfont icon-dianzan">{{item.dz}}</view>
                   </view>
                   
                </view>
            </view>  
        </view>
        <view class="imageDetail_item5">
            <view class="imageDetail_item5_1">
                <view class="iconfont icon-video_camera_"></view>
                <view class="imageDetail_item5_2">{{zuiRe.title}}</view>
            </view>
            <view class="imageDetail_item5_3" v-for="item in zuiRe.children" :key="item.id">
                <view class="imageDetail_item5_4">
                    <image :src="item.img"></image>
                </view>
                <view class="imageDetail_item5_5">
                   <view class="imageDetail_item5_6">{{item.title1}}</view>
                   <view class="imageDetail_item5_7">{{item.title2}}</view>
                   <view class="imageDetail_item5_9">
                      <view class="imageDetail_item5_8">{{item.title3}}</view>
                      <view class="iconfont icon-dianzan">{{item.dz}}</view>
                   </view>
                   
                </view>
            </view>  
        </view>
        <view class="footers">
            <view class="footer_img" @click="handleImg">下载图片</view>
        </view>
    </view>
</template>
<script>
import {requireImgDectail2} from "../../utils/params";
import require from "../../utils/require";
export default {
   data(){
       return{
         initData:{},
         zhuanJi:{},
         zuiXin:{},
         zuiRe:{}
       }
   },
   onLoad(){
       this.initData=getApp().globalData.data;
       this.init();
   },
   methods:{
       init(){
         require({url:"/imgDetail"}).then(result=>{
            this.zhuanJi=requireImgDectail2()
         }).catch(err=>{
             this.zhuanJi=requireImgDectail2().ele1;
             this.zuiXin=requireImgDectail2().ele2;
             this.zuiRe=requireImgDectail2().ele3;
         })
       },
      async handleImg(){
         await uni.showLoading({
              title:"下载中..."
          })
         const result1 =await  uni.downloadFile({url:this.initData.bannerImg});
         const {tempFilePath}=result1[1];
         const result2=await uni.saveImageToPhotosAlbum({filePath:tempFilePath});
         uni.hideLoading();
        await uni.showToast({
             title:"保存成功"
         })
       }
   }
}
</script>
<style lang="scss" scoped>
    .imageDetail{
       .imageDetail_title{
           display: flex;
           padding-left:40rpx;
           padding-top:40rpx;
           padding-bottom: 20rpx;
           align-items: center;
           .imageDetail_title_img{
               width: 80rpx;
               height: 80rpx;
               border-radius: 50%;
               margin-right: 30rpx;
               overflow: hidden;
               image{
                   width: 100%;
                   height: 100%;
               }
           }
           .imageDetail_title_right{
               display: flex;
               flex-direction: column;
               .imageDetail_title_text1{
                   font-weight: 900;
                   font-size:22rpx; 
               }
               .imageDetail_title_text2{
                   color:#ccc;
                   font-size:20rpx;
               }
           }
       }
       .imageDetail_banner{
           padding:10rpx;
           width:100%;
           height: 300rpx;
           image{
               height: 100%;
               width:100%;
           }
       } 
       .imageDetail_item3{
           display: flex;
           justify-content: space-around;
           font-size:20rpx;
           padding-top:12rpx;
           padding-bottom: 12rpx;
           border-bottom: 2px solid #fcf9fc;
       }
       .imageDetail_item4{
           padding:30rpx 20rpx 20rpx 20rpx;
           border-bottom: 3px solid #fcf9fc;
           .imageDetail_item4_1{
               color:#ccc;
               font-size:22rpx;
               padding-bottom: 20rpx;
           }
           .imageDetail_item4_2{
               display: flex;
                position: relative;
               .imageDetail_item4_3{
                   width:120rpx;
                   height: 120rpx;
                   margin-right: 20rpx;
                   image{
                       width:100%;
                       height: 100%;
                   }
               }
               .imageDetail_item4_4{
                   display: flex;
                   flex-direction: column;
                  
                   .imageDetail_item4_5{
                       color:#fff;
                       background-color: #E93F81;
                       padding:2px 3px;
                       margin-bottom: 10rpx;
                       font-size: 20rpx;
                       text-align: center;
                   }
                   .imageDetail_item4_7{
                      
                      .imageDetail_item4_6{
                       color:#ccc;
                       font-size: 20rpx;
                     }
                     .icon-youjiantou{
                       position: absolute;
                       right: 10rpx;
                       top:45%;
                     }
                   }
               }
           }
       }
       .imageDetail_item5{
           padding:40rpx 20rpx 10rpx 20rpx;
           border-bottom: 2px solid #fcf9fc;
           .imageDetail_item5_1{
               display: flex;
               margin-bottom: 30rpx;
               .imageDetail_item5_2{
                   font-size:30rpx;
                   font-weight: 900;
                   margin-left:20rpx;
               }
           }
           .imageDetail_item5_3{
               display: flex;
                margin-bottom: 30rpx;
               .imageDetail_item5_4{
                   width: 90rpx;
                   height: 90rpx;
                   margin-right: 20rpx;
                   image{
                       width:100%;
                       height:100%;
                   }
               }
               .imageDetail_item5_5{
                   .imageDetail_item5_6{
                       font-size: 25rpx;
                       margin-bottom: 20rpx;
                   }
                   .imageDetail_item5_7{
                       font-size: 22rpx;
                       color:#ccc;
                       margin-bottom: 50rpx;
                   }
                   .imageDetail_item5_9{
                       display: flex;
                       width: 600rpx;
                       justify-content: space-between;
                   }
               }
           }
       }
       .footers{
           margin-top:40rpx;
           height: 80rpx;
           .footer_img{
             height: 100%;
             margin-left:30rpx;
             margin-right: 30rpx;
             background-color: pink;
             text-align: center;
             line-height: 80rpx;
             font-size:40rpx;
             font-weight: 900;
             color:#fff;
             margin-bottom: 20rpx;
           }
       }
    }
</style>