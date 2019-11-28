###  跳转页面传参

```
wx.navigatorTo({
    url:'',
    success:(res)=>{
        res.eventChannel.emit("aaa",123)
    }
})

在跳转页面 onLoad中接收

onLoad(){
     const eventChannel = this.getOpenerEventChannel()
     eventChannel.on("aaa",(re)=>{
      console.log(re)
    })
}
```