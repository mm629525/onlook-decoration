Component({
  properties: {
    src: {
      type: String,
      value: ''
    },
    arc: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setBorderRadius(newVal)
      }
    },
    mode: {
      type: String,
      value: 'widthFix'
    },
    height: {
      type: Number,
      value: 480
    },
    width: {
      type: Number,
      value: 640
    },
    fullwidth: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: 'none'
    },
    margin: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setMargin(newVal)
      }
    },
    padding: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setPadding(newVal)
      }
    }
  },
  data: {
    borderRadius: '',
    marginStr: '',
    paddingStr: ''
  },
  methods: {
    setBorderRadius: function(val) {
      let wm = this
      let arr = val.split(' ')
      let str = ''

      for (var i = 0; i < arr.length; i++) {
        let rpx = arr[i]
        str += rpx + 'rpx '
      }

      wm.setData({
        borderRadius: str
      })
    },
    setMargin: function(val) {
      let wm = this
      let arr = val.split(' ')
      let str = ''

      for (var i = 0; i < arr.length; i++) {
        let rpx = arr[i]
        str += rpx + 'rpx '
      }

      wm.setData({
        marginStr: str
      })
    },
    setPadding: function(val) {
      let wm = this
      let arr = val.split(' ')
      let str = ''

      for (var i = 0; i < arr.length; i++) {
        let rpx = arr[i]
        str += rpx + 'rpx '
      }

      wm.setData({
        paddingStr: str
      })
    },
    onTap: function() {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('mytap', myEventDetail, myEventOption)
    }
  }
})
