// plugin/components/indexPlugList/indexPlugList.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [{
                a: '123',
                c: "strChang",

                e: "textarea",
                b: "img",
                d: "textarea"
            }, {
                a: '456',
                c: "strChang",
                b: "img",
                d: "textarea",
                e: "textarea"
            }, {
                a: '789',
                c: "strChang",
                b: "img",
                d: "textarea",
                e: "textarea"
            }]
        },
        typeList: {
            type: Object,
            value: {
                a: "title",
                c: "strC",
                e: "strC",
                b: "image",
                d: "text"
            }
        },
        imageIsShow: {
            type: Boolean,
            value: false,
        },
        imageUrl: {
            type: String,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        imageIsShow: true
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})