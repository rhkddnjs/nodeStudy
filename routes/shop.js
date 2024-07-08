const router = require('express').Router()

let connectDB = require('./../database.js') //database.js 파일 경로

let db
connectDB.then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
}).catch((err)=>{
  console.log(err)
}) 

router.get('/shirts', (req,res)=> {
    res.send('셔츠는 페이지')
  });
  router.get('/pants', (req,res)=> {
    res.send(' 바지는 페이지')
  });

  module.exports = router