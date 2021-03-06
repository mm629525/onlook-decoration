//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  checkLogin() {
    let wm = this
    let token = wx.getStorageSync('token')

    let isLogin = true

    if (!token) {
      isLogin = false

      wx.switchTab({
        url: '/pages/mine/mine'
      })

      setTimeout(() => {
        wm.toast('阿偶！您还没有登录哦，请先登录！')
      }, 1000)
      return isLogin
    }

    wx.request({
      url: wm.globalData.apiUrl + '/login',
      data: {
        wxCode: token
      },
      method: 'GET',
      header: { Accept: wx.getStorageSync('accept') },
      success: function(res) {
        if (res.statusCode === 401) {
          isLogin = false

          wx.switchTab({
            url: '/pages/mine/mine'
          })

          setTimeout(() => {
            wm.toast('阿偶！您还没有登录哦，请先登录！')
          }, 1000)
        }
      }
    })

    return isLogin
  },
  globalData: {
    userInfo: null
  }
})
