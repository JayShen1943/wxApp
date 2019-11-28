Page({
 
  data: {
    showDialog: false
  },
  openDialog: function () {
    this.setData({
      istrue: true
    })
  },
  closeDialog: function () {
    this.setData({
      istrue: false
    })
  },
  onLoad(options){
    const eventChannel=this.getOpenerEventChannel()
    eventChannel.on("aaa",(re)=>{
      console.log(re)
    })
  }
});