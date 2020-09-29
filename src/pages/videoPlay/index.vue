<template>
    <view class="videoPlay">
        <view class="video_img1">
            <image :src="url"></image>
        </view>
        <view class="video_icon">
            <!-- <view :class="'iconfont' (muted?'icon-jingyinmute31':'icon-shengyin')"></view> -->
            <view @click="handleJY" :class="['iconfont',muted?'icon-jingyinmute31':'icon-shengyin']"></view>
            <view class="iconfont icon-zhuanfa">
                <button open-type="share"></button>
            </view>
        </view>
        <view class="video2">
           <video  :muted="muted" objectFit="fill" :src="videoData" ></video> 
        </view>
        <view class="video_text">
            <view class="video_text2" @click="handleDown">下载视屏</view>
        </view>
    </view>
</template>
<script>
import {requireVideo} from "../../utils/params";
export default {
    data(){
        return{
         url:"",
         videoData:"",
         muted:false
        }
    },
    onLoad(){
      this.url=getApp().globalData.url;
      this.videoData=requireVideo(getApp().globalData.url);
    },
    methods:{
        handleJY(){
            this.muted=! this.muted;
        },
       async handleDown(){
           await uni.showLoading({title:"下载中"})
           const data = await uni.downloadFile({url:this.videoData});
           const tempFilePath=data[1].tempFilePath;
           console.log(666,tempFilePath)
           await uni.saveVideoToPhotosAlbum({filePath:tempFilePath})
           await uni.hideLoading();
           await uni.showToast({title:"下载完成"});
        }
    }
}
</script>
<style lang="scss" scoped>
    .videoPlay{
        .video_img1{
            position: relative;
            image{
                position:absolute;
                top:0;
                left:0;
                z-index: -1;
                width: 100%;
                height: 100vh;
                filter: blur(20rpx);
            }
        }
        .video_icon{
            display: flex;
            justify-content: flex-end;
            padding-right: 20rpx;
            .icon-shengyin{
                height: 80rpx;
                width: 80rpx;
                border-radius: 40rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                color:#fff;
                font-size: 40rpx;
                background-color: rgba(0,0,0,.2);
                margin-right: 15rpx;
            }
            .icon-jingyinmute31{
                height: 80rpx;
                width: 80rpx;
                border-radius: 40rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                color:#fff;
                font-size: 40rpx;
                background-color: rgba(0,0,0,.2);
                margin-right: 15rpx;
            }
            .icon-zhuanfa{
                 height: 80rpx;
                width: 80rpx;
                border-radius: 40rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                color:#fff;
                font-size: 40rpx;
                background-color: rgba(0,0,0,.2);
                position: relative;
                button{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height: 100%;
                    opacity: 0;
                }
            }

        }
        .video2{
          display: flex;
          justify-content: center;
          video{
            width:420rpx;
            height: 600rpx;
          }
        }
        .video_text{
            margin-top:20rpx;
            display: flex;
            justify-content: center;
            .video_text2{
                color:#fff;
                font-size: 20rpx;
                text-align: center;
                width:320rpx;
                height: 72rpx;
                line-height: 68rpx;
                border-radius: 36rpx;
                border:3px solid #fff;
                background-color: rgba(0,0,0,.4);
                font-weight: 900;
            }
        }
    }
</style>