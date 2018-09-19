const app = getApp()

Page({
  data: {
    supportInfo: null
  },
  onLoad: function() {
    let wm = this
    wm.getSupportInfo()
  },
  getSupportInfo: function() {
    let wm = this

    let support = {
      mobile: '15523956634',
      qq: '1835848979',
      email: '1835848979@qq.com'
    }

    wm.setData({
      supportInfo: support
    })
  },
  callMobile: function() {
    let wm = this
    wx.makePhoneCall({
      phoneNumber: wm.data.supportInfo.mobile
    })
  }
})
