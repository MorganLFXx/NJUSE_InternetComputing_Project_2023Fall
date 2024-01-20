// pages/home/score/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hint: '欢迎在这里畅所欲言，说出你对该菜品的意见或建议！',
    text: '',
    isEmpty: true,
    isNumEmpty: true,
    isStandard: false,
    isSubmitted: false,
    pickers: [{
      itemIndex: 100,
      value: 9,
      hint: "评分",
      selections: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      conditionForDisplay: true,
    }],
    userID: "", //从onLoad获取
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userID: options.userID,
    })
  },

  inputHandler(e) {
    this.setData({
      value: e.detail.value,
      isEmpty: e.detail.value === '',
    })
  },

  async changeHandler(event) {
    const value = event.detail.value;
    var pickers = this.data.pickers;
    pickers[0].value = value;
    this.setData({
      pickers: pickers,
    })
  },

  submit() {
    //todo 向后端发送数据
    this.setData({
      isSubmitted: true,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})