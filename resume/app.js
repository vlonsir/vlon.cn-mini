import SHA1 from './utils/SHA1';
App({
  onLaunch() {
    var now = Date.now();
    this.globalData.api.appKey = SHA1(this.globalData.apiCloud.appId + 'UZ' + this.globalData.apiCloud.appKey +'UZ' + now) + '.' + now;
    this.globalData.api.headers["X-APICloud-AppKey"] = this.globalData.api.appKey;


    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: {
      avatarUrl: '',
      nickName: ''
    },
    host: 'https://d.apicloud.com',
    appId: 'wx1baca7ad94810898',
    appKey: '',
    apiCloud: {
      appId: 'A6011233851659',
      appKey: '94501DE2-3E09-1CDF-609F-2663F447DA9A'
    },
    api: {
      appKey: '',
      headers: {
        "X-APICloud-AppKey": '',
        "X-APICloud-AppId": 'A6011233851659'
      }
    },
    userId: '',
    basicInfo: {
      avatar: '',
      name: '',
      phone: '',
      sex: '',
      birthday: '',
      workTime: '',
      wechat: '',
      email: '',
    },
    introduce: "", //我的优势
    status: "", //求职状态
    hope_work_title: "", //期望职位  如前端开发
    hope_work_city: "", //期望工作城市
    hope_work_style: "", //期望工作类型  全职  兼职
    hope_work_profession: "", //期望工作行业  如互联网   不限行业
    hope_work_min_money: "", //期望最少薪资
    hope_work_max_money: "", //期望最多薪资
    work_history: [ //工作经历
      {
        company: "", //公司名称
        beginTime: "", //开始时间
        endTime: "", //结束时间
        job: "", //岗位名称  如前端开发
        department: "", //所在部门   如技术部   研发部
        content: "", //工作内容
        contribution: "", //突出贡献
        tags: ["HTML/CSS", "Web前端", "Javascript"] //掌握技能标签
      }
    ],
    project_history: [ //项目经历
      {
        name: "", //项目名称
        role: "", //我在项目中的角色 
        beginTime: "", //项目开始时间
        endTime: "", //项目结束时间
        content: "", //我在项目中的工作内容  即 主要负责做什么
        contribution: "" //突出贡献
      }
    ],
    learning_history: [ //教育经历
      {
        school: "", //学校名称
        level: "", //学历级别   如小学1  中学2  高中3  中专4  高职高专5  大专6  本科7  研究生8  博士9  博士后10  教授11
        profession: "", //专业名称，所学专业
        education: "", //学历名称
        beginTime: "", //开始时间
        endTime: "", //结束时间
        content: "" //在校情况   如获得过哪些成就或奖项，担任过哪些重要职位
      }
    ],
    certificate: [ //资格证书
      {
        name: "", //证书名称
        level: "", //证书级别  如院校级  省部级  国家级
        getTime: "", //获得时间
        content: "", //证书描述
        url: "" //上传的证书文件路径
      }
    ],
    social_homepage: [ //社交主页
      { 
        site: "", //站点名称   如个人博客   个人网站   微博  github个人主页
        url: ""  //站点网址
      }
    ]
  }
})
