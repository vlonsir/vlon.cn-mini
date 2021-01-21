const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        avatar: '../common/images/nosex.png',
        avatarFileType: '',
        name: '',
        phone: '',
        sex: {
            list: ['男', '女'],
            value: ''
        },
        birthday: '',
        work: '',
        wechat: '',
        email: '',
        isUploadAvatar: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // if(options.id) {
        //     this.setData({
        //         id: options.id
        //     }, function() {
        //         this.getBasicInfo();
        //     })
        // }
        try {
            var value = wx.getStorageSync('globalData');
            if (value) {
                app.globalData = JSON.parse(value);
                this.setData({
                    id: app.globalData.userId||"",
                    avatar: app.globalData.basicInfo.avatar,
                    name: app.globalData.basicInfo.name||"",
                    phone: app.globalData.basicInfo.phone||"",
                    "sex.value": app.globalData.basicInfo.sex=="男"?0:app.globalData.basicInfo.sex=="女"?1:'',
                    birthday: app.globalData.basicInfo.birthday||"",
                    work: app.globalData.basicInfo.work||"",
                    wechat: app.globalData.basicInfo.wechat||"",
                    email: app.globalData.basicInfo.email||""
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
    changeName(e){
        this.setData({
            "name": e.detail.value
        })
    },
    changeWechat(e){
        this.setData({
            "wechat": e.detail.value
        })
    },
    changeEmail(e){
        this.setData({
            "email": e.detail.value
        })
    },
    /**
     * 选择性别
     */
    bindSexChange(e) {
        //console.log(e);
        this.setData({
            "sex.value": e.detail.value
        })
    },
    /**
     * 选择出生年月
     */
    bindBirthdayChange(e) {
        //console.log(e);
        this.setData({
            "birthday": e.detail.value
        })
    },
    /**
     * 选择 参加工作时间
     */
    bindWorkChange(e) {
        //console.log(e);
        this.setData({
            "work": e.detail.value
        })
    },
    changePhone(e) {
        this.setData({
            "phone": e.detail.value
        })
    },
    /**
     * 选择头像图片
    */
    chooseAvatar() {
        let that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // console.log(res);
                const tempFilePaths = res.tempFilePaths[0];
                let arr = tempFilePaths.split(".");
                let type = 'image/' + arr[arr.length-1];
                that.setData({
                    avatar: tempFilePaths,
                    avatarFileType: type
                }, function() {
                    that.uploadAvatar();
                })
            }
        })
    },
    /**
     * 上传头像
    */
    uploadAvatar() {
        let that = this;
        wx.showLoading({title: '加载中'});
        const uploadTask = wx.uploadFile({
            url: 'https://d.apicloud.com/mcm/api/file',
            filePath: this.data.avatar,
            name: 'file',
            header: app.globalData.api.headers,
            formData: {
                "filename": this.data.wechat,
                "type": this.data.avatarFileType
            },
            timeout: 1000 * 60,
            success(res) {
                wx.hideLoading();
                const data = JSON.parse(res.data);
                // console.log(data);
                if(data.id && data.url) {
                    wx.showToast({
                      title: '上传成功', icon: 'success'
                    })
                    that.setData({
                        avatar: data.url,
                        isUploadAvatar: true
                    })
                } else {
                    wx.showToast({
                      title: '上传失败',icon: 'none'
                    })
                }
            },
            fail(err) {
                wx.hideLoading();
            }
        });
    },
    //进入页面 查询基础信息
    getBasicInfo(){
        let that = this;
        wx.showLoading({title: '加载中'});
        wx.request({
            url: `${app.globalData.host}/mcm/api/resume/${this.id}`,
            method: 'GET',
            header: app.globalData.api.headers,
            success (res) {
                wx.hideLoading();
                // console.log(res)
                if(res.statusCode == 200 && res.data.id) {
                    that.setData({
                        "name": res.data.name,
                        "sex.value": res.data.sex=='男'?0:res.data.sex=='女'?'1':'',
                        "birthday": res.data.birthday||'',
                        "work": res.data.begin_work_time||'',
                        "wechat": res.data.wechat||'',
                        "email": res.data.email||'',
                    })
                } else {
                    wx.showModal({
                        title: '提示',
                        content: JSON.stringify(res)
                    })
                }
            },
            fail(err) {
                wx.hideLoading();
            }
        })
    },
    //收集整理 保存时需提交的参数
    getParams() {
        let params = {};
        if(this.data.name) { 
            params.name = this.data.name;
        } else {
            wx.showToast({title: '姓名不能为空', icon: 'none'});
            return false;
        }
        if(this.data.phone) { 
            if(this.data.phone.length==11) {
                params.phone = this.data.phone;
            } else {
                wx.showToast({title: '手机号错误', icon: 'none'});
                return false;
            }
        } else {
            wx.showToast({title: '手机号不能为空', icon: 'none'});
            return false;
        }
        if(this.data.sex.value>=0) { params.sex = this.data.sex.list[this.data.sex.value];}
        if(this.data.birthday) { params.birthday = this.data.birthday;}
        if(this.data.work) { params.begin_work_time = this.data.work;}
        if(this.data.wechat) { params.wechat = this.data.wechat;}
        if(this.data.email) { params.email = this.data.email;}
        return params;
    },
    //创建信息
    createBasicInfo(){
        let that = this;
        wx.showLoading({title: '加载中'});
        wx.request({
            url: `${app.globalData.host}/mcm/api/resume`,
            method: 'POST',
            header: app.globalData.api.headers,
            data: this.getParams(),
            success (res) {
                wx.hideLoading();
                // console.log(res)
                if(res.statusCode == 200 && res.data.id) {
                    app.globalData.userId = res.data.id;
                    wx.showToast({title: '保存成功', icon: 'success'})
                    that.setGlobalBasicInfo();
                } else {
                    wx.showModal({
                        title: '提示',
                        content: JSON.stringify(res)
                    })
                }
            },
            fail(err) {
                wx.hideLoading();
            }
        })
    },
    //编辑信息
    editBasicInfo() {
        let that = this;
        wx.showLoading({title: '加载中'});
        wx.request({
            url: `${app.globalData.host}/mcm/api/resume/${this.data.id}`,
            method: 'PUT',
            header: app.globalData.api.headers,
            data: this.getParams(),
            success (res) {
                wx.hideLoading();
                // console.log(res)
                if(res.statusCode == 200 && res.data.id) {
                    wx.showToast({title: '保存成功', icon: 'success'})
                    that.setGlobalBasicInfo();
                } else {
                    wx.showModal({
                        title: '提示',
                        content: JSON.stringify(res)
                    })
                }
            },
            fail(err) {
                wx.hideLoading();
            }
        })
    },
    //保存的方法
    saveBasicInfo() {
        if(!this.getParams()) {return false;}
        this.getIdByPhone(this.data.phone);
    },
    /**
     * 点击 保存按钮
    */
    save() {
        this.saveBasicInfo();
    },
    setGlobalBasicInfo() {
        app.globalData.basicInfo.avatar = this.data.avatar;
        app.globalData.basicInfo.name = this.data.name;
        app.globalData.basicInfo.phone = this.data.phone;
        app.globalData.basicInfo.sex = this.data.sex;
        app.globalData.basicInfo.birthday = this.data.birthday;
        app.globalData.basicInfo.workTime = this.data.work;
        app.globalData.basicInfo.wechat = this.data.wechat;
        app.globalData.basicInfo.email = this.data.email;
        try {
            wx.setStorageSync('globalData', JSON.stringify(app.globalData))
            wx.redirectTo({
              url: '/pages/resume/resume'
            })
        } catch (e) { }
    },
    //通过手机号 查询当前用户在数据中是否存在
    getIdByPhone(phone){
        let that = this;
        wx.request({
            url: `${app.globalData.host}/mcm/api/resume?filter={"fields":{"id":true},"where":{"phone":"${phone}"},"skip":0,"limit":1}`,
            method: 'GET',
            header: app.globalData.api.headers,
            success (res) {
                // console.log(res)
                if(res.statusCode == 200) {
                    if(res.data.length>0 && res.data[0].id) {
                        app.globalData.userId = res.data[0].id;
                        that.setData({
                            id: res.data[0].id
                        }, function() {
                            that.editBasicInfo();
                        })
                    } else {
                        that.createBasicInfo();
                    }
                } else {
                    that.createBasicInfo();
                }
            },
            fail(err) {
                wx.hideLoading();
            }
        })
    }
})