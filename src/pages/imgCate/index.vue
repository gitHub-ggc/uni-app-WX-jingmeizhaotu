<template>
    <view>
        <view class="home">
            <view class="home_title">
            <uni-segmented-control 
               :current="current" 
               :values="items.map(v=>v.title)" 
               @clickItem="onClickItem" 
               style-type="text" 
               active-color="#D86C95">
            </uni-segmented-control>
          </view>
          <view class="iconfont icon-sousuo"></view>
        </view>
        <scroll-view scroll-y enable-flex class="content">
          <view  class="content_img" v-for="(item,index) in 18" :key="index">
              <image :src="imgDetail"></image>
          </view>
        </scroll-view>
    </view>
</template>
<script>
import {uniSegmentedControl } from '@dcloudio/uni-ui';
export default {
    data() {
			return {
				items: [
                    {id:0,title:"最新"},
                    {id:1,title:"热门"},
                ],
                current: 0,
                imgArr:[],
                id:0,
                imgDetail:''
			}
        },
     onLoad(options){
         this.id=options.id;
         this.init();
     },
    components: {
        uniSegmentedControl 
     },
     methods: {
       onClickItem(e) {
         if(e.currentIndex == 1){
            this.imgDetail="http://cdn.mc.huluxia.net/g4/M01/5F/1A/rBAAdl9xsUWAdtbyAAArz6Iy0PY003.jpg"
         }else{
           this.init();
         }
         if (this.current !== e.currentIndex) {
             this.current = e.currentIndex;
         }
       },
       init(){  
           this.imgArr = getApp().globalData.imgDetailData;
           let imgUrl=this.imgArr.filter(v=>{ return v.id==this.id})
           this.imgDetail=imgUrl[0].url;
       }
     },
}
</script>
<style lang="scss" scoped>
    .home{
        padding:0 200rpx;
        position: relative;
       .home_title{
           font-size:22rpx;
       }
       .icon-sousuo{
           position:absolute;
           top:5%;
           right: 20%;
           transform: translateY(50%);
       }
     }
     .content{
         margin-top:30rpx;
         display: flex;
         flex-flow: wrap;
         height: calc( 100vh - 90rpx );
         .content_img{
           width:33%;
           height: 400rpx;
           border: 5rpx solid #fff;
           
           image{
               width:100%;
               height: 100%;
           }
         }
     }
</style>