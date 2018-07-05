/**
 *  版权声明 :  地老天荒科技有限公司
 *  文件名称 :  list_plugin_index.js
 *  创 建 者 :  Cheng Tao
 *  创建日期 :  2018/06/22 20:38
 *  文件描述 :  列表组件首页js文件
 *  历史记录 :  -----------------------
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 要渲染的数组
        list: {
            type: Array,
            value: []
        },
        // 信息的小标题
        listTitle:{
            type:Object,
            value:{
                
            }
        },
        // 数据的单个对象数据类别
        typeList: {
            type: Object,
            value: {
                
            }
        },
        // 控制列表有没有图片显示
        imageIsShow: {
            type:Boolean,
            value:true,
        },
        // 接收域名
        host:{
            type:String
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /*
         *  名      称:  jumpDetail()
         *  功      能:  将数据写入缓存并创建自定义事件
         *  输      入:  -----------
         *  输      出:  调用该事件的对象的详细信息
         *  创      建:  2018/06/22
         */
        jumpDetail:function(res){
            var index = res.currentTarget.id;
            var obj = this.data.list[index];
            var store_img_url=obj.store_img_url;
            var store_img_array = obj.store_img_array;
            obj.store_img_url = this.data.host + store_img_url;
            for(var i=0;i<store_img_array.length;i++){
                obj.store_img_array[i] = this.data.host+store_img_array[i];
            }
            console.log(obj);
            wx.setStorageSync("listObj", obj);
            wx.setStorageSync("typeList", this.data.typeList);
            wx.setStorageSync("listTitle", this.data.listTitle)
            this.triggerEvent("clickDetail");
        },
        /*
         *  名      称:  phoneCall()
         *  功      能:  调用拨打电话api
         *  输      入:  -----------
         *  输      出:  -----------
         *  创      建:  2018/06/22
         */
        phoneCall: function () {
            wx.makePhoneCall({
                phoneNumber: '010-86220269'
            })
        },
    }
})