const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        avatar: app.globalData.userInfo.avatarUrl||'/pages/common/images/nosex.png',
        name: app.globalData.userInfo.nickName||'刘威龙',
        age: '', //年龄
        workTimes: '', //工作年限
        heightEducation: "", //最高学历
        nowYear: new Date().getFullYear(),
        jobStatus: { //求职状态
            list: ["离职-随时到岗","在职-月内到岗","在职-考虑机会","在职-暂不考虑"],
            index: ''
        },
        introduce: "", //我的优势
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
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        try {
            var value = wx.getStorageSync('globalData');
            if (value) {
                app.globalData = JSON.parse(value);
                this.setData({
                    id: app.globalData.userId,
                    avatar: app.globalData.basicInfo.avatar,
                    name: app.globalData.basicInfo.name,
                    phone: app.globalData.basicInfo.phone,
                    // "sex.value": app.globalData.basicInfo.avatar=="男"?0:1,
                    birthday: app.globalData.basicInfo.birthday,
                    work: app.globalData.basicInfo.work,
                    // wechat: app.globalData.basicInfo.wechat,
                    // email: app.globalData.basicInfo.email
                })
            }
        } catch (e) {
        // Do something when catch error
        }
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
    bindJobStatusChange: function(e) {
        this.setData({
            "jobStatus.index": e.detail.value
        })
    },
    createBasicInfo: function() {
        wx.navigateTo({
          url: '../basicInfo/basicInfo'
        })
    },
    createIntroduce: function() {
        wx.navigateTo({
          url: '../introduce/introduce'
        })
    }
})