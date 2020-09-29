<template>
    <view>
       最新 
    </view>
</template>
<script>
export default {
     mounted(){
       //动态修改标题
       uni,wx.setNavigationBarTitle({
           title: '最新',
       });   
   }
}
</script>
<style lang="">
    
</style>