Component({
  properties: {
    col: {
      type: Boolean,
      value: false
    },
    horizontal: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setHorizontal(newVal)
      }
    },
    vertical: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setVertical(newVal)
      }
    },
    height: {
      type: Number,
      value: 0
    },
    width: {
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
    nowrap: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: '#ffffff'
    },
    opacity: {
      type: Number,
      value: 1
    },
    divider: {
      type: Boolean,
      value: false
    },
    hidden: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setHidden(newVal)
      }
    },
    arc: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setRadius(newVal)
      }
    }
  },
  data: {
    row: '',
    column: '',
    marginStr: '',
    paddingStr: '',
    isHide: false,
    radiusStr: ''
  },
  methods: {
    setHorizontal: function(val) {
      let wm = this
      switch (val) {
        case 'center':
          wm.setData({
            row: 'row-center'
          })
          break

        case 'between':
          wm.setData({
            row: 'row-between'
          })
          break

        case 'around':
          wm.setData({
            row: 'row-around'
          })
          break

        case 'end':
          wm.setData({
            row: 'row-end'
          })
          break
      }
    },
    setVertical: function(val) {
      let wm = this
      switch (val) {
        case 'start':
          wm.setData({
            column: 'col-start'
          })
          break
        case 'end':
          wm.setData({
            column: 'col-end'
          })
          break
        case 'stretch':
          wm.setData({
            column: 'col-stretch'
          })
          break
      }
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
    setRadius: function(val) {
      let wm = this
      let arr = val.split(' ')
      let str = ''

      for (var i = 0; i < arr.length; i++) {
        let rpx = arr[i]
        str += rpx + 'rpx '
      }

      wm.setData({
        radiusStr: str
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
