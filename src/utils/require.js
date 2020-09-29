
export default (params)=>{
   const baseUrl = "http://157.212.54.189:9088/image/v3"
    uni.showLoading({
        title:"加载中"
    })
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result);
            },
            fail:(err)=>{
                reject(err);
                uni.hideLoading();
            },
            complete(){
                
            }
        })
    })
    
}