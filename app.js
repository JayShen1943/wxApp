App({
  onLaunch: function () {
  
  },
  _post(obj){
    
    return new Promise((resolve,reject)=>{
      // 取缓存
      
      wx.showLoading({  // 显示 loading 提示框
        title:'请求中...' ,
        mask: true     // 是否显示透明蒙层，防止触摸穿透

      });
      wx.request({    //发起 HTTPS 网络请求
        method:"POST",//HTTP 请求方法
        url: obj.url,
        data:obj.data,
        header: {     //设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
          'Content-Type': 'application/x-www-form-urlencoded'
          //放token
        },
        success: function(res) {
          /*
          code: 401  token过期
          */ 
         if(res.code === 401){
           wx.showToast({
             title: '登录信息',
             icon: '身份信息过期，请重新登录',
             complete(){
              //  跳到登录页
             }
           })
          //  调到登录页面
         }else if(res.code===0){
           resolve(res);
         }
          wx.hideLoading();
          
        },
        fail:(err)=>{
          reject(err);
        }
      })
    });
  },
  globalData: {
    userInfo: null,
    wx:12345
  }
})