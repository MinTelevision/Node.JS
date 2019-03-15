//用户信息路由
const express = require('express');
const bodyParser = require('body-parser');
let Router = express.Router();
const db=require('../api/base.js');
//登录信息
Router.post('/',bodyParser.urlencoded({ extended: false }),async (req,res)=>{
    let {name,password} = req.body;
    // password = isNaN(password) ? password : password*1;//一定要转为数字
    let data;
    try{
        data=await db.find('user',{name,password});//获取所有商品信息
    }catch(err){
        data=err;
    }
    res.send(data);
});

module.exports = Router;
