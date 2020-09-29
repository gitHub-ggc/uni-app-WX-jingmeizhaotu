  <template>
     <view class="video">
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
            <view v-if="current === 0 || current === 1 || current === 2 || current === 3">  
               <video-main :imgArr="imgArr"></video-main>
            </view>
            <view v-if="current === 4">
                <video-cate></video-cate>
            </view>
        </view>
   </view>
</template>
<script>
import {uniSegmentedControl } from '@dcloudio/uni-ui';
import videoMain from "./videoMain/index";
import videoCate from "./videoCate/index";
import {requireJMSP1} from "../../utils/params";
export default {
   	data() {
			return {
				items: [
                    {id:0,title:"推荐"},
                    {id:1,title:"娱乐"},
                    {id:2,title:"最新"},
					{id:3,title:"热门"},
					{id:4,title:"分类"}
                ],
				current: 0,
				imgArr:""
			}
		},
		onLoad() {
          this.imgArr=requireJMSP1(0);
		},
		methods: {
          onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
			}
			if(e.currentIndex == 0){
              this.imgArr=requireJMSP1(0);
			}else if(e.currentIndex == 1){
              this.imgArr=requireJMSP1(1);
			}else if(e.currentIndex ==2){
				this.imgArr=requireJMSP1(2);
			}else if(e.currentIndex ==3){
				this.imgArr=requireJMSP1(3);
			}else{
				this.imgArr=requireJMSP1(4)
			}

          }
        },
        components: {
		   uniSegmentedControl,
		   videoMain,
		   videoCate
        }
}
</script>
<style lang="scss">
    .video{
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