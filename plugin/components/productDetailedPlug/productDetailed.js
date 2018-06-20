// plugin/components/productDetailedPlug/productDetailed.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl: {
      type: String,
    },
    logoImageUrl: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    obj: wx.getStorageSync("obj"),
    typeList: wx.getStorageSync("typeList"),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
