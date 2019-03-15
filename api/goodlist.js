const express = require('express');
let Router = express.Router();
const db=require('../api/base.js');

//查询全部商品信息
Router.get('/',async (req,res)=>{
    let data;
    try{
        data=await db.find('goodlist',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查询全部商品信息分页
Router.get('/fenye',async (req,res)=>{
    let data;
    try{
        data=await db.find('goodlist',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});
//删除所选项并重新渲染
Router.get('/delete',async (req,res)=>{
    let data;
    try{
        data=await db.delete('goodlist',{name:req.query.canshu});
    }catch(err){
        data=err;
    }
    try{
        data=await db.find('goodlist',{},0);
    }catch(err){
        data=err;
    }
    res.send(data);
});
//更新上下架状态
Router.get('/update',async (req,res)=>{
    let data;
    try{
        data=await db.update('goodlist',{name:req.query.canshu},{sta:req.query.sta});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查找符合分类搜索条件的数据
Router.get('/search',async (req,res)=>{
    let data;
    let type=req.query.type;
    try{
        data=await db.find('goodlist',{type});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查找符合名字搜索条件的数据
Router.get('/searchName',async (req,res)=>{
    let data;
    try{
        data=await db.find('goodlist',{name:req.query.canshu});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//更新编辑商品状态
Router.get('/updateGood',async (req,res)=>{
    let data;
    let {name,subtitle,oldPrice,newPrice,category,storage,gAttribute1,gAttribute2,gAttribute3,sta,goodDetial}=req.query;
    try{
        data=await db.update('goodlist',{name},{name,subtitle,oldPrice,newPrice,category,storage,gAttribute1,gAttribute2,gAttribute3,sta,goodDetial});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//增加商品
Router.get('/addGood',async (req,res)=>{
    let data;
    let {name,subtitle,oldPrice,newPrice,category,storage,gAttribute1,gAttribute2,gAttribute3,sta,goodDetial,PS,addTime}=req.query;
    try{
        data=await db.insert('goodlist',{name,subtitle,oldPrice,newPrice,category,storage,gAttribute1,gAttribute2,gAttribute3,sta,goodDetial,PS,addTime});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//删除所选分类并重新渲染
Router.get('/deleteCate',async (req,res)=>{
    let data;
    try{
        data=await db.delete('goodlist',{category:req.query.canshu});
    }catch(err){
        data=err;
    }
    try{
        data=await db.find('goodlist',{});//查找删除后的全部
    }catch(err){
        data=err;
    }
    res.send(data);
});
//更新分类名字
Router.get('/updateCate',async (req,res)=>{
    let data;
    let {category,PS,categoryOld}=req.query;
    try{
        data=await db.update('goodlist',{category:categoryOld},{category,PS});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查询升序/降序
Router.get('/oldPriceRank',async (req,res)=>{
    let data;
    let {oldPriceRank}=req.query;
    try{
        data=await db.Rank('goodlist',{},{"oldPrice":Number(oldPriceRank)});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查询升序/降序
Router.get('/newPriceRank',async (req,res)=>{
    let data;
    let {newPriceRank}=req.query;
    try{
        data=await db.Rank('goodlist',{},{"newPrice":Number(newPriceRank)});
    }catch(err){
        data=err;
    }
    res.send(data);
});
//查询升序/降序
Router.get('/storageRank',async (req,res)=>{
    let data;
    let {storageRank}=req.query;
    try{
        data=await db.Rank('goodlist',{},{"storage":Number(storageRank)});
    }catch(err){
        data=err;
    }
    res.send(data);
});
module.exports = Router;