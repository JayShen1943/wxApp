//  components/common-head/common-head.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title:{
      type:String,
      value:"首页"
    }
  },
  observers:{
    "title":(newVal)=>{
      console.log("值变化了:"+newVal)
    }
    },

  /**
   * 组件的初始数据
   */
  data: {
    subTile:"我是子组件的数据"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    emitData(){
      // 父组件传数据
      this.triggerEvent("emit",this.data.subTile)
    }
  }
})
