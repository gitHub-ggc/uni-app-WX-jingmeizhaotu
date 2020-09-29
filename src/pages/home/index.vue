<template>
    <view>
      <view class="segmented">
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
        <view class="content">
            <view v-if="current === 0">  
                <home-album></home-album>
            </view>
            <view v-if="current === 1">
                <home-category></home-category>
            </view>
            <view v-if="current === 2">
                <home-new></home-new>
            </view>
            <view v-if="current === 3">
                <home-recommend></home-recommend>
            </view>
        </view>
      </view>
    </view>
</template>
<script>
import homeAlbum from "./home-album";
import homeCategory from "./home-category";
import homeNew from "./home-new";
import homeRecommend from "./home-recommend"
import {uniSegmentedControl } from '@dcloudio/uni-ui';
export default {
    	data() {
			return {
				items: [
                    {id:0,title:"推荐"},
                    {id:1,title:"分类"},
                    {id:2,title:"最新"},
                    {id:3,title:"专辑"},
                ],
                current: 0,
			}
		},
		onLoad() {
         
		},
		methods: {
          onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
            }
          }
        },
        components: {
           homeAlbum,
           homeCategory,
           homeNew,
           homeRecommend,
           uniSegmentedControl 
        }
}
</script>
<style lang="scss">
  .segmented{
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
  }
</style>