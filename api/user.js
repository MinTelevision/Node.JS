const express = require('express');
let Router = express.Router();
const db=require('../api/base.js');
//获取所有商品信息
Router.get('/',async (req,res)=>{
    let data;
    try{
        data=await db.find('user',{});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//删除所选用户信息并重新渲染数据
Router.get('/delete',async (req,res)=>{
    let data;
    try{
        data=await db.delete('user',{name:req.query.canshu});
    }catch(err){
        data=err;
    }
    try{
        data=await db.find('user',{});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查找符合名字搜索条件的数据
Router.get('/searchName',async (req,res)=>{
    let data;
    try{
        data=await db.find('user',{name:req.query.canshu});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//更新编辑商品状态
Router.get('/updateGood',async (req,res)=>{
    let data;
    let {name,nickname,password,tel,gender,city,career,birthday,email,PS}=req.query;
    try{
        data=await db.update('user',{name},{nickname,password,tel,gender,city,career,birthday,email,PS});
    }catch(err){
        data=err;
    }
    res.send(data);
});
module.exports = Router;
//更新编辑商品状态
Router.get('/addGood',async (req,res)=>{
    let data;
    let {name,nickname,password,tel,gender,city,career,birthday,email,PS,addTime}=req.query;
    try{
        data=await db.insert('user',{name,nickname,password,tel,gender,city,career,birthday,email,PS,addTime,score:'100'});
    }catch(err){
        data=err;
    }
    res.send(data);
});