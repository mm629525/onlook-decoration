Component({
  properties: {
    size: {
      type: Number,
      value: 30
    },
    width: {
      type: Number,
      value: 0
    },
    multi: {
      type: Number,
      value: 1
    },
    color: {
      type: String,
      value: '#333333'
    },
    bold: {
      type: String,
      value: 'normal'
    },
    space: {
      type: Boolean,
      value: false
    },
    lineHeight: {
      type: Number,
      value: 0
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
    },
    align: {
      type: String,
      value: 'left'
    },
    hidden: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setHidden(newVal)
      }
    }
  },
  data: {
    marginStr: '',
    paddingStr: '',
    textAlign: 'left'
  },
  methods: {
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
    setHidden: function(val) {
      let wm = this
      switch (val) {
        case 'true':
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
    },
    onTap: function() {
      var myEventDetail = {}
      var myEventOption = {}
      this.triggerEvent('mytap', myEventDetail, myEventOption)
    }
  }
})
