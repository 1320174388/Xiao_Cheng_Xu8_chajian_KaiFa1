var plugin = requirePlugin("myPlugin");
var config = require("../../config.js");
Page({
    data:{
        imgUrl:"../../api/lib/images/indexPlugList-img.png",
        // 列表
        list:[],
        // 列表的类型
        typeList:"",
        // 列表的小标题
        listTitle:"",
        // 域名
        host:"",
    },
  onLoad: function() {
    var that = this;
    wx.request({
        url: config.service.host +'/api/home/Store_Get/get_Store',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method:'POST',
        success:function(res){
            var list = res.data.retData;
            for(var i=0;i<list.length;i++){
                list[i].store_img_array = [list[0].store_img_url, list[0].store_img_url, list[0].store_img_url, list[0].store_img_url]
            }
            var typeList = {
                store_name: "title",
                store_img_url: "image",
                store_addr: "textShort",
                store_img_array:"imageArray",
            };
            var listTitle = {
                store_addr:"门店地址"
            }
            that.setData({
                host: config.service.host,
                list: list,
                typeList:typeList,
                listTitle:listTitle,
            })
            
        }
    })
  },
  // 页面跳转
  jumpDetail:function(){
      wx.navigateTo({
          url: '../productDetailed/index'
      })
  }
})