// plugin/components/plugin_module/right_plugin/v3/right_plugin.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [{
        a: '123',
        b: "strChang",
        c: "textarea",
      }]
    },
  typeList: {
    type: Object,
    value: {
      a: "title",
      b: "strC",
      c: "text",
    }
  },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 选项卡
    // 职位管理
    tabOne: true,
    // 申请管理
    tabTwo: false,
    // 管理员管理
    tabThree: false,
    // 职位管理内容
    positionIsChecked: true,
    // 申请管理内容
    applyIsChecked: false,
    // 管理员管理内容
    managerIsChecked: false,
    // 点击删除之后的样式
    delIsChecked: false,
    // 点击编辑之后的样式
    updateIsChecked: false,
    // 职位管理删除模态框
    showModalStatus: false,
    // 职位管理详情模态框
    showModalDetailStatus: false,
    // 职位管理编辑模态框
    showModalUpdateStatus: false,
    // 职位管理添加模态框
    showModalAddStatus:false,
    // 点击职位管理添加查看门店之后的样式
    lookAddIsChecked: false,
    // 点击职位管理添加信息管理之后的样式
    manageAddIsChecked: false,
    // 点击职位管理添加权限管理之后的样式
    powerAddIsChecked: false,
    // 点击职位管理编辑查看门店之后的样式
    lookUpdateIsChecked: false,
    // 点击职位管理编辑信息管理之后的样式
    manageUpdateIsChecked: false,
    // 点击职位管理编辑权限管理之后的样式
    powerUpdateIsChecked: false,
    // 点击拒绝之后的样式
    rejectIsChecked: false,
    // 点击通过之后的样式
    passIsChecked: false,
    // 点击管理员删除之后的样式
    managerDelIsChecked: false,
    // 点击管理员编辑之后的样式
    managerUpdateIsChecked: false,
    // 管理员管理删除模态框
    managerShowModalStatus: false,
    // 管理员管理编辑模态框
    managerShowUpdateModalStatus: false,
    // 点击管理员管理编辑三级管理员之后的样式
    threeManagerUpdateIsChecked: false,
    // 点击管理员管理编辑二级管理员之后的样式
    twoManagerUpdateIsChecked: false,
    // 点击管理员管理编辑二级管理员一之后的样式
    oneManagerUpdateIsChecked: false,
    // 申请管理拒绝通过模态框
    applyshowModalStatus: false,
  },

 
  /**
   * 组件的方法列表
   */
  methods: {
    // 选项卡切换
    // 职位管理点击更换样式及内容
    tabOneClick: function (e) {
      this.setData({
        tabOne: true,
        tabTwo: false,
        tabThree: false,
        positionIsChecked: true,
        applyIsChecked: false,
        managerIsChecked: false,
      })
    },
   // 申请管理点击更换样式及内容
    tabTwoClick: function (e) {
      this.setData({
        tabOne: false,
        tabTwo: true,
        tabThree: false,
        positionIsChecked: false,
        applyIsChecked: true,
        managerIsChecked: false,
      })
    },
   // 管理员管理点击更换样式及内容
    tabThreeClick: function (e) {
      this.setData({
        tabOne: false,
        tabTwo: false,
        tabThree: true,
        positionIsChecked: false,
        applyIsChecked: false,
        managerIsChecked: true,
      })
    },
    // 删除点击改变样式
    delSelection() {
      this.setData({
        delIsChecked: true,
        updateIsChecked: false,
      })
    },
    // 编辑点击改变样式
    updateSelection() {
      this.setData({
        updateIsChecked: true,
        delIsChecked: false,
      })
    },
    // 删除按钮点击事件
    delClick: function (e) {
      this.setData({
        showModalStatus: true,
      })
    },
    // 删除模态框取消按钮
    cancelClick: function (e) {
      this.setData({
        showModalStatus: false,
      })
    }, 
    // 删除模态框确认按钮
    affirmClick: function (e) {
      this.setData({
        showModalStatus: false,
      })
    },
    // 详情按钮点击事件
    detailClick: function (e) {
      this.setData({
        showModalDetailStatus: true,
      })
    },
    // 详情模态框消失事件
    detailCancelClick: function (e) {
      this.setData({
        showModalDetailStatus: false,
      })
    },
    // 职位管理添加查看门店点击改变样式
    lookAddSelection() {
      this.setData({
        lookAddIsChecked: true,
        manageAddIsChecked: false,
        powerAddIsChecked: false,
      })
    },
    // 职位管理添加信息管理点击改变样式
    manageAddSelection() {
      this.setData({
        lookAddIsChecked: false,
        manageAddIsChecked: true,
        powerAddIsChecked: false,
      })
    },
    // 职位管理添加权限管理点击改变样式
    powerAddSelection() {
      this.setData({
        lookAddIsChecked: false,
        manageAddIsChecked: false,
        powerAddIsChecked: true,
      })
    },
    // 添加按钮点击事件
    addModelClick: function (e) {
      this.setData({
        showModalAddStatus: true,
      })
    },
    // 添加模态框取消按钮
    powerCancelClick: function (e) {
      this.setData({
        showModalAddStatus: false,
      })
    }, 
    // 添加模态框确认按钮
    powerAffrimClick: function (e) {
      this.setData({
        showModalAddStatus: false,
      })
    }, 
    // 编辑按钮点击事件
    updateClick: function (e) {
      this.setData({
        showModalUpdateStatus: true,
      })
    },


    // 职位管理编辑查看门店点击改变样式
    lookUpdateSelection() {
      this.setData({
        lookUpdateIsChecked: true,
        manageUpdateIsChecked: false,
        powerUpdateIsChecked: false,
      })
    },
    // 职位管理编辑信息管理点击改变样式
    manageUpdateSelection() {
      this.setData({
        lookUpdateIsChecked: false,
        manageUpdateIsChecked: true,
        powerUpdateIsChecked: false,
      })
    },
    // 职位管理编辑权限管理点击改变样式
    powerUpdateSelection() {
      this.setData({
        lookUpdateIsChecked: false,
        manageUpdateIsChecked: false,
        powerUpdateIsChecked: true,
      })
    },
    // 编辑模态框取消按钮
    updatePowerCancelClick: function (e) {
      this.setData({
        showModalUpdateStatus: false,
      })
    },
    // 编辑模态框确认按钮
    updatePowerAffrimClick: function (e) {
      this.setData({
        showModalUpdateStatus: false,
      })
    }, 
    // 申请管理拒绝点击改变样式
    rejectSelection() {
      this.setData({
        rejectIsChecked: true,
        passIsChecked: false,
        applyshowModalStatus: true,
      })
    },
    // 申请管理通过点击改变样式
    passSelection() {
      this.setData({
        rejectIsChecked: false,
        passIsChecked: true,
        applyshowModalStatus: true,
      })
    },
    // 申请管理拒绝按钮点击事件
    applyCancelClick: function (e) {
      this.setData({
        applyshowModalStatus: false,
      })
    },
    // 申请管理通过按钮点击事件
    applyAffirmClick: function (e) {
      this.setData({
        applyshowModalStatus: false,
      })
    },
    // 管理员删除点击改变样式
    managerDelSelection() {
      this.setData({
        managerDelIsChecked: true,
        managerUpdateIsChecked: false,
      })
    },
    // 管理员编辑点击改变样式
    managerUpdateSelection() {
      this.setData({
        managerDelIsChecked: false,
        managerUpdateIsChecked: true,
      })
    },
    // 管理员删除按钮点击事件
    managerUpdateClick: function (e) {
      this.setData({
        managerShowUpdateModalStatus: true,
      })
    },
    // 管理员管理编辑三级管理员点击改变样式
    threeManagerSelection() {
      this.setData({
        threeManagerUpdateIsChecked: true,
        twoManagerUpdateIsChecked: false,
        oneManagerUpdateIsChecked: false,
      })
    },
    // 管理员管理编辑二级管理员点击改变样式
    twoManagerSelection() {
      this.setData({
        threeManagerUpdateIsChecked: false,
        twoManagerUpdateIsChecked: true,
        oneManagerUpdateIsChecked: false,
      })
    },
    // 管理员管理编辑一级管理员点击改变样式
    oneManagerSelection() {
      this.setData({
        threeManagerUpdateIsChecked: false,
        twoManagerUpdateIsChecked: false,
        oneManagerUpdateIsChecked: true,
      })
    },
    // 管理员编辑模态框取消按钮
    updateManagerCancelClick: function (e) {
      this.setData({
        managerShowUpdateModalStatus: false,
      })
    },
    // 管理员编辑模态框确认按钮
    updateManagerAffrimClick: function (e) {
      this.setData({
        managerShowUpdateModalStatus: false,
      })
    },
    // 管理员删除按钮点击事件
    managerDelClick: function (e) {
      this.setData({
        managerShowModalStatus: true,
      })
    },
    // 管理员删除模态框取消按钮
    managerDelCancelClick: function (e) {
      this.setData({
        managerShowModalStatus: false,
      })
    },
    // 管理员删除模态框确认按钮
    managerUpdateAffirmClick: function (e) {
      this.setData({
        managerShowModalStatus: false,
      })
    },
  }
})
