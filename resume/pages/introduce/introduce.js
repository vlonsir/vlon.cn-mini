const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: '',
        words: 0,
        entering: false,
        exmple: {
            show: false,
            list: [
                {
                    icon: '../common/images/javagongchengshi.jpg',
                    name: 'java工程师',
                    desc: '3年java后端开发经验，对分布式系统有较深理解。自学能力强，抗压能力强。'
                }, {
                    icon: '../common/images/anzuogongchengshi.jpg',
                    name: 'Android开发',
                    desc: '4年Android开发经验，参与过多款App开发，涉足教育、电商、资讯多个行业。为人谦虚谨慎，求知欲望强烈，对待工作一丝不苟。'
                }, {
                    icon: '../common/images/uishejishi.jpg',
                    name: '资深UI设计师',
                    desc: '3年UI设计经验，美院毕业。熟悉产研流程，熟悉多终端设计规范。尤其擅长动效、插画。'
                }, {
                    icon: '../common/images/neirongyunying.jpg',
                    name: '内容运营',
                    desc: '广告学毕业，能为老板想创意，能陪产品做定位，能陪技术找bug，拿得住绣花针，背得起大麻袋，具有文艺气质的二逼青年。'
                }, {
                    icon: '../common/images/xiaoshoujingli.jpg',
                    name: '销售经理',
                    desc: '2年销售管理经验，在担任区域负责人期间，带领区域同事做到移动业务量全省第一。口齿伶俐、思维灵敏，管理组织能力强，精通各种营销手段。'
                }
            ],
            index: 0
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    focusEntering: function() {
        this.setData({
            entering: true
        })
    },
    blurEntering: function() {
        this.setData({
            entering: false
        })
    },
    huanyige: function() {
        let index = this.data.exmple.index;
        if(index == this.data.exmple.list.length-1) {
            index = 0
        } else {
            index++
        }
        this.setData({
            "exmple.index": index
        })
    },
    lookOther: function() {
        this.setData({
            "exmple.show": !this.data.exmple.show
        })
    },
    onEntering: function(e) {
        if(e.detail.value) {
            if(e.detail.value.length<=140){
                this.setData({
                    content: e.detail.value,
                    words: e.detail.value.length
                })
            }
        } else {
            this.setData({
                content: '',
                words: 0
            })
        }
    },
    save: function() {
        if(this.data.words==0) {
            wx.showToast({title: '请输入内容',icon: 'none' })
        } else {
            //执行保存
        }
    }
})