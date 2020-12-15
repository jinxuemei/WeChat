// pages/cloud/cloud.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  async insert(){
    try {
      const res = await db.collection('test').add({
        data:{
          name:"靳雪梅",
          age:18,
          like:["馄饨粉","桂圆"],
          children:{
            name:"黄婉晴",
            age:3,
            like:["吃屎"],
          }
        }
      })
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  },
  async upload(){
    //1、选择图片
    let chooseImgRes
    let tempFilePaths
    try {
      chooseImgRes = await wx.chooseImage({
        count:1,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
      })
      tempFilePaths = chooseImgRes.tempFilePaths
    } catch (error) {
      console.error(error);
    }

    //2、图片上传云存储
    
    //3、保存fileID到存储库
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})