// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: './images/like.png',
    noSrc: './images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onTap(){
      let count = this.properties.count
      let like = this.properties.like
      this.setData({
        like: !like,
        count: like?count -1: count + 1 
      })     
    },

  }
})
