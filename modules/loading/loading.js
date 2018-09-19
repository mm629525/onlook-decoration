Component({
  properties: {
    loading: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setHide(newVal)
      }
    },
    content: {
      type: String,
      value: '暂无数据'
    }
  },
  data: {
    isHide: false
  },
  methods: {
    setHide: function(val) {
      let wm = this
      switch (val) {
        case 'loading':
          wm.setData({
            isHide: true
          })
          break
        default:
          wm.setData({
            isHide: false
          })
          break
      }
    }
  }
})
