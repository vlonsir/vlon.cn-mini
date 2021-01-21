// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    id: '',
    nickname: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {
    try {
      var value = wx.getStorageSync('globalData')
      if (value) {
        app.globalData = JSON.parse(value);
        this.setData({
          id: app.globalData.userId
        })
      }
    } catch (e) {
      // Do something when catch error
    }

    if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        app.globalData.userInfo = res.userInfo;
        app.globalData.hasUserInfo = true;
        this.setData({nickname: e.detail.userInfo.nickName})
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.hasUserInfo = true;
          this.setData({nickname: e.detail.userInfo.nickName})
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.hasUserInfo = true;
    this.setData({nickname: e.detail.userInfo.nickName})
  },
  //我的简历
  goMyResume(){
    if(this.data.id) {
      wx.navigateTo({url: '/pages/resume/resume'});
    } else {
      wx.navigateTo({url: '/pages/basicInfo/basicInfo'});
    }
  },
  //简历模板
  goResumeModules(){
    wx.navigateTo({url: '/pages/modules/modules'});
  }
})
