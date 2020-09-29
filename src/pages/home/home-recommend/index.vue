<template>
  <scroll-view class="recommend" scroll-y @scrolltolower="handleScroll()">
    <swiper class="recommend_swiper" indicator-dots autoplay circular>
        <swiper-item  v-for="item in lunbo" :key="item.id" >
            <image class="swiper-item" :src="item.url" mode="widthFix"></image>
        </swiper-item>
    </swiper>
    <view class="recommend_content">
        <navigator url="/pages/recommendDec/index" class="recommend_item" v-for="item in content" :key="item.id">
            <view class="recommend_left">
                <image :src="item.url"></image>
            </view>
            <view class="recommend_right">
                <view class="recommend_title1">{{item.title}}</view>
                <view class="recommend_title2">{{item.title2}}</view>
                <view class="recommend_text">
                    <text>+ 关注</text>
                </view>
            </view>
        </navigator>
    </view>
  </scroll-view>
</template>
<script>
import requireData from "../../../utils/require";
import {requireRecommend} from "../../../utils/params";
import { uniSwiperDot } from "@dcloudio/uni-ui";
export default {
  data() {
    return {
      lunbo: [],
      content:[],
      num:0
    };
  },
  mounted() {
    //动态修改标题
      uni.setNavigationBarTitle({
        title: "专辑"
      });
    this.init();
  },
  methods: {
    init() {
      this.num++
      requireData({ url: "/recommend" })
        .then(result => {
          this.lunbo = result.lunbo;
        })
        .catch(err => {
          this.lunbo = requireRecommend().lunbo;
          this.content=[...this.content,...requireRecommend().content_img];
        });
    },
    change(e) {
            this.current = e.detail.current;
        },
    handleScroll(){
          if(this.num >=5){
             uni.showToast({title:"我是有底线的~~"})
          }else{
              clearTimeout(this.time);
              this.time=setTimeout(()=>{
                this.init();
              },1000)
          }
        }
  },
  components: {
    uniSwiperDot,
  }
};
</script>
<style lang="scss" scoped>
   .recommend{
       height: calc(100vh - 72rpx);
   }
   .recommend_swiper{
       height: 400rpx;
   }
   .recommend_content{
           margin-top:10rpx;
           padding:10rpx;
           padding-bottom: 30rpx;
           border-bottom: 1px solid #fcf9fc;
           .recommend_item{
               display: flex;
                margin-bottom: 25rpx;
               .recommend_left{
                   flex:1;
                   image{
                       width:100%;
                       height: 100%;
                   }
               }
               .recommend_right{
                   flex:2;
                   padding-left:15rpx;
                   .recommend_title1{
                       font-size:34rpx;
                       font-weight: 900;
                       margin-bottom: 15rpx;
                       padding-left:15rpx;
                   }
                   .recommend_title2{
                       font-size:28rpx;
                       white-space: nowrap;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       margin-bottom: 40rpx;
                   }
                   .recommend_text{
                       display: flex;
                       justify-content: flex-end;
                       padding-right:30rpx;
                       text{
                           font-size:20rpx;
                           color:#E5B8C8;
                           padding:6rpx 10rpx;
                           border:1px solid #E5B8C8;
                       }
                   }
               }
           }
       }
</style>