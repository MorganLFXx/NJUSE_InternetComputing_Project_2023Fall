// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const { userId } = event;

    // 查询对应用户ID的订单数据
    const orders = await db.collection(`orders_${userId}`).get();

    return {
      success: true,
      orders: orders.data,
    };
  } catch (error) {
    console.error('云函数执行失败', error);
    return {
      success: false,
      error,
    };
  }
};
