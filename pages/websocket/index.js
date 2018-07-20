// pages/websocket/websocket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  connectWebsocket: function () {
    wx.connectSocket({
      url: 'ws://localhost:3080/netty-push/websocket/u_00001',
      //url: 'wss://netty-push.littlehotspot.com/websocket/u_00001',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET"
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！')
    })
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！')
    })
    wx.onSocketMessage(function (res) {
      var data=JSON.parse(res.data);
      console.log('收到服务器内容：' + data.content)
    })
  }
})