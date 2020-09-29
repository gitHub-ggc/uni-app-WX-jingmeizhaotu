<template>
    <view class="main">
     <view class="cateS">
        <navigator :url="`/pages/imgCate/index?id=${item.id}`"  class="cate_1" v-for="item in cateList" :key="item.id">
           <view class="cate_img">
               <image :src="item.url"></image>
           </view>
           <view  class="cate_text">{{item.name}}</view>
       </navigator>
     </view>
    </view>
</template>
<script>
import require from "../../../utils/require";
import {requireCatergryList} from "../../../utils/params"
export default {
    data(){
        return{
          cateList:[] 
        }
    },
     mounted(){
       //动态修改标题
       uni,wx.setNavigationBarTitle({
           title: '分类',
       }); 
       this.getList();  
   },
   methods:{
       getList(){
         require({url:"/catergary"}).then(result=>{
           this.cateList=result
         }).catch(err=>{
             this.cateList=requireCatergryList();
             getApp().globalData.imgDetailData=requireCatergryList();
         })
       }
   }
}
</script>
<style lang="scss" scoped>
    .cateS{
        display: flex;
        flex-wrap: wrap;
        margin-top:20rpx;
        .cate_1{
            width:33%;
            border: 5rpx solid #fff;
            position: relative;
            float: left;
            .cate_img{
                width: 100%;
                height: 200rpx;
              image{
                  width:100%;
                  height: 100%;
              }
            }
            .cate_text{
                position: absolute;
                bottom: 5rpx;
                left:10rpx;
                color:red;
            }
        }
    }
</style>