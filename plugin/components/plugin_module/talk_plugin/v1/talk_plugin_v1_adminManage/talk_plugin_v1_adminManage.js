/**
 *  版权声明 :  地老天荒科技有限公司
 *  文件名称 :  talk_plugin_v1_adminManage.js
 *  创 建 者 :  Cheng Tao
 *  创建日期 :  2018/07/17 19:09
 *  文件描述 :  客服组件后台管理页js文件
 *  历史记录 :  -----------------------
 */
var time = new Date();
var M = time.getMonth() + 1;
var D = time.getDate();
var X = time.getDay();
var week = ["日", "一", "二", "三", "四", "五", "六"]
var strTime = M + '月' + D + '日' + ' 星期' + week[X];
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      talkImgOwn: {
          type: String,
      },
      talkImgOthers: {
          type: String,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      time: strTime,
      idCardShow:0,
      idCardColorAsk:1,
      idCardColorReply:0.5
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //   点击用户提问切换用户提问模块
    idCardAsk:function(){
        this.setData({
            idCardColorAsk:1,
            idCardColorReply: 0.5,
            idCardShow:0
        })
    },
    //   点击自动回复切换自动回复模块
    idCardReply: function () {
        this.setData({
            idCardColorAsk: 0.5,
            idCardColorReply: 1,
            idCardShow:3
        })
    },
    //点击查看用户名下所有问题
    askLook:function(){
        this.setData({
            idCardShow: 1
        })
    },
    //点击查看问题详细内容
    askContentLook: function () {
        this.setData({
            idCardShow: 2
        })
    }
  }
})
