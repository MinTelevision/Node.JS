const express = require('express');
let Router = express.Router();
const db=require('../api/base.js');

//查询全部订单信息
Router.get('/',async (req,res)=>{
    let data;
    try{
        data=await db.find('order',{});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//删除所选项并重新渲染
Router.get('/delete',async (req,res)=>{
    let data;
    try{
        data=await db.delete('order',{name:req.query.canshu});
    }catch(err){
        data=err;
    }
    try{
        data=await db.find('order',{});//查找删除后的全部
    }catch(err){
        data=err;
    }
    res.send(data);
});
module.exports = Router;