//把路由封装成模块
const express = require('express');

// 引入单独路由模块
const loginRouter = require('./login');
const goodsRouter = require('./goodlist');
const userRouter = require('./user');
const orderRouter = require('./order');

let Router = express.Router();

//登录信息路由
Router.use('/login',loginRouter);

// 商品信息路由
Router.use('/goodlist',goodsRouter);

// 用户信息路由
Router.use('/user',userRouter);

// 订单信息路由
Router.use('/order',orderRouter);

module.exports = Router;