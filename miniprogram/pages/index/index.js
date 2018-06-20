var plugin = requirePlugin("myPlugin")
Page({
    data:{
        imgUrl:"../../api/lib/images/indexPlugList-img.png"
    },
  onLoad: function() {
    plugin.getData()
  },
  jumpDetail:function(){
      wx.navigateTo({
          url: '../productDetailed/index'
      })
  }
})