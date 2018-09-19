Component({
  properties: {
    src: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      value: 84
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
    marginStr: '',
    paddingStr: ''
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
    }
  }
})
