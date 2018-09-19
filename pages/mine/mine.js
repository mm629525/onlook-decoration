//获取应用实例
const app = getApp()

Page({
  data: {
    coverPath: '/img/icon-user.png',
    remarkName: '登录',
    disabled: ''
  },
  //事件处理函数

  onLoad: function() {
    let wm = this

    let ownerUser = wx.getStorageSync('ownerUser')
    if (ownerUser) {
      wm.setData({
        realLogo: ownerUser.realLogo,
        remarkName: ownerUser.remarkName,
        disabled: 'disabled'
      })
    }
  },
  login(e) {
    let wm = this
    let userInfo = e.detail.userInfo

    if (userInfo) {
      wx.showLoading({
        title: '正在登录...',
        mask: true
      })

      wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
              url: app.globalData.apiUrl + '/login',
              data: {
                code: res.code,
                rawData: e.detail.rawData,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                signature: e.detail.signature,
                remarkName: userInfo.nickName,
                realLogo: userInfo.avatarUrl
              },
              method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: { Accept: wx.getStorageSync('accept') },
              success: function(res) {
                let data = res.data
                wx.hideLoading()

                if (res.statusCode !== 200) {
                  app.toast('服务器太忙，请重新尝试登录')
                  return
                }

                wm.setData({
                  realLogo: data.realLogo,
                  remarkName: data.remarkName,
                  disabled: 'disabled'
                })

                app.ok('登录成功')

                wx.setStorage({
                  key: 'ownerUser',
                  data: data
                })

                wx.setStorage({
                  key: 'token',
                  data: data.wxCode
                })
              },
              fail: function() {
                wx.hideLoading()
              }
            })
          }
        }
      })
    }
  }
})
