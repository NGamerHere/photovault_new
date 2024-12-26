import express from "express";

const Testing=express.Router();

Testing.get('/testing',(req,res)=>{
   res.send('hello there tis is testing');
});

export default Testing;