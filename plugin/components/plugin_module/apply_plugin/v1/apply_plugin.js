/**
 *  版权声明 :  地老天荒科技有限公司
 *  文件名称 :  admin_plugin.js
 *  创 建 者 :  Cheng Tao
 *  创建日期 :  2018/07/05 15:58
 *  文件描述 :  后台首页js文件
 *  历史记录 :  -----------------------
 */
var time = new Date();
var M = time.getMonth()+1;
var D = time.getDate();
var X = time.getDay();
var week = ["日", "一", "二", "三", "四", "五", "六"]
var strTime = M + '月' + D + '日' + ' 星期' + week[X];
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        time: strTime,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        timeh: function() {
            
        }
    }
})