<template>
    <view class="videoPlay2">
        <view class="video2">
           <video page-gesture controls  :muted="muted" objectFit="fill" :src="videoData" ></video> 
        </view>
        <view class="video_text">
            <view @click="handleDown" class="video_text2">下载视屏</view>
        </view>
    </view>
</template>
<script>
// import {requireVideo} from "../../utils/params";
export default {
    data(){
        return{
         url:"",
         videoData:"http://video.699pic.com/videos/45/01/44/HMScMpWUM6Ct1530450144.mp4",
         muted:false
        }
    },
    onLoad(){
    
    },
    methods:{
        handleJY(){
            this.muted=! this.muted;
        },
        async handleDown(){
           await uni.showLoading({title:"下载中"})
           const data = await uni.downloadFile({url:this.videoData});
           console.log(11,data)
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
    .videoPlay2{
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
          margin-top:200rpx;
          padding:0 20rpx;
          video{
            width:100vh;
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