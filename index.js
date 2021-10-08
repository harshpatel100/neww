const express = require('express')
const path = require('path')
const app = express()
const sp = path.join(__dirname,'/public')
const port = process.env.PORT
app.use(express.static(sp))
app.get('',(req,res)=>{
  res.send("yes")
  //res.render('index')
})
app.listen(3000 || port,()=>{
  console.log("ok server is running..")
})