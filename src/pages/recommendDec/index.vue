<template>
    <view class="recommendDec">
        <view class="recommendDec_item1">
            <view class="recommendDec_img1">
                <image :src="decArr.bigUrl"></image>
            </view>
            <view class="recommendDectext">
                <view class="recommendDec_title1">{{decArr.title1}}</view>
                <view class="recommendDec_title2">
                   <text>关注专辑</text>
               </view>
            </view>
        </view>
        <view class="recommendDec_item2">
            <view class="recommendDec_text3">{{decArr.title2}}</view>
            <view class="recommendDec_text4">{{decArr.title3}}</view>
            <view class="recommendDec_text5">{{decArr.title4}}</view>
        </view>
        <view class="recommendDec_item3">
            <view class="recommendDec_imgs" v-for="item in imgs" :key="item.id">       
                <lian-jie :index="index" :imageArr="imgs">
                    <image :src="item.url"></image>
                </lian-jie>
            </view>
        </view>
    </view>
</template>
<script>
import {requireRecommendDec} from "../../utils/params";
import require from "../../utils/require";
import lianJie from "../../component/lianjie";
export default {
   data(){
       return{
           decArr:[],
           id:0,
           imgs:[],
           num:0
       }
   },
   onLoad(options){
      this.id=options.id;
      this.init();
   },
   methods:{
       init(){
           require({url:"/recommendDec",data:{id:this.id}}).then(result=>{
               this.decArr=result.data;
           }).catch(err=>{
               this.num++;
               this.decArr=requireRecommendDec();
               this.imgs=[...this.imgs,...requireRecommendDec().images];
           })
       }
   },
  //页面触底事件
  onReachBottom(){
     if(this.num >=5){
        uni.showToast({title:"没有更多数据了!"})
     }else{
         clearTimeout(this.times);
         this.times=setTimeout(()=>{
             this.init()
         },1000)
     }
  },
  components:{
      lianJie
  }
}
</script>
<style lang="scss" scoped>
    .recommendDec{
        .recommendDec_item1{
            width:100%;
            height: 450rpx;
            position: relative;
            .recommendDec_img1{
                height: 100%;
                image{
                    width:100%;
                    height: 100%;
                    // height: 330rpx;
                }
            }
            .recommendDectext{
                width:100%;
                position:absolute;
                bottom: 20rpx;
                left:0;
                display: flex;
                justify-content: space-between;
                padding-left:40rpx;
                padding-right: 15rpx;
                .recommendDec_title1{
                    color:#fff;
                    font-size:30rpx;
                    font-weight: 900;
                }
                .recommendDec_title2{
                    text{
                        font-size:20rpx;
                        color:#fff;
                        padding:6rpx 10rpx;
                        background-color: #E03A7D;
                    }
                }
            }
        }
        .recommendDec_item2{
            padding:20rpx 10rpx 50rpx 20rpx;
            .recommendDec_text3{
                font-size: 26rpx;
                color:#000;
                font-weight: 900;
                padding-left:20rpx;
                margin-bottom: 20rpx;
            }
            .recommendDec_text4{
                font-size:24rpx;
                margin-bottom: 20rpx;
            }
            .recommendDec_text5{
                font-size:24rpx;
            }
        }
        .recommendDec_item3{
            display: flex;
            flex-wrap: wrap;
            .recommendDec_imgs{
                width:33%;
                height: 300rpx;
                border: 2px solid #fff;
                image{
                    width:100%;
                    height:330rpx;
                }
            }
        }
    }
</style>