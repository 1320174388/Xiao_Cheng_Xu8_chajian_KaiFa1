// plugin/components/indexPlugList/indexPlugList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list:{
          type:Array,
          value:[
              {
                  a:'123',
                  c:"strChang",
                  b: "img",
                  d: "textarea"
              }, {
                  a: '456',
                  c: "strChang",
                  b: "img",
                  d: "textarea"
              }, {
                  a: '789',
                  c: "strChang",
                  b: "img",
                  d:"textarea"
              }
          ]
      },
      typeList:{
          type:Object,
          value:{
              a:"title",
              b:"image",
              c:"strC",
              d:"text"
          }
      },
      imageIsShow:{
          type:Boolean,
          value:true,
      },
      imageUrl:{
          type:String,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageIsShow:true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
