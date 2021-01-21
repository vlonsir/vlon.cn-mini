const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        jobType: 0,
        region: [],
        jobName: '',
        hangye: '',
        salary: {
            min: 10,
            max: 15
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
    bindRegionChange: function(e) {
        this.setData({
            region: e.detail.value
        })
    },
    bindSalaryMin: function(e) {
        this.setData({
            "salary.min": e.detail.value
        })
    },
    bindSalaryMax: function(e) {
        this.setData({
            "salary.max": e.detail.value
        })
    },
    changeJobType: function(e) { 
        this.setData({
            jobType: e.currentTarget.dataset.index
        })
    }
})