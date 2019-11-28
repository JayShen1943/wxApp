Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  login(){
    let obj = {};
    this.setData({
      isLoading:true
    })
    wx.login({    //调用接口获取登录凭证（code）
      success: function(res) {
        console.log(res)
        obj.code = res.code;
        wx.getUserInfo({    //获取用户信息对象，不包含 openid 等敏感信息
          success: function(res) {
            console.log(res)
            obj.iv = res.iv;   //iv:加密算法的初始向量
            obj.encryptedData = res.encryptedData;  //包括敏感数据在内的完整用户信息的加密数据
            wx.request({    //发起 HTTPS 网络请求
              url:"xxxx",
              method:"POST",
              data:obj,
              success:function(res){
                wx.setStorageSync("token",res.session_key);
              }
            })
          }
        })
      }
    });


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})