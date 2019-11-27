// pages/home/home.js
const App =getApp();
console.log(App);
// 引入
import Utils from "../../utils/util"
Page({

  //页面的初始数据
  data: {
    obj:{
      name:"杨浩田",
      content:"真漂亮"
    }
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    //接受 页面间的传参、发送ajax
    console.log("页面加载时触发--onload");
    // this.setData({
    //   title:"改变后的标题"
    // })
  },

 //生命周期函数--监听页面初次渲染完成
  onReady: function () {
   
  },

  //生命周期函数--监听页面显示
  onShow: function () {
    
  },

  //生命周期函数--监听页面隐藏
  onHide: function () {

  },

  //生命周期函数--监听页面卸载
  onUnload: function () {

  },

  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    
  },

  //页面上拉触底事件的处理函数
  onReachBottom: function () {
    
  },

  //用户点击右上角分享
  onShareAppMessage: function () {

  }
})