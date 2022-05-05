const express=require('express')
const path= require('path')
const cors=require('cors')
const Text=require('./controllers/convertToCode');
const Code=require('./controllers/convertToText')
const PORT=process.env.PORT || 3000;

const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*')
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token");
    
    app.use(cors())
    next()
})



app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname+'/src/public/index.html'))
})
app.get('/main.css',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/public/main.css'))
 })
app.get('/codigo.js',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/public/codigo.js'))
 })
 app.get('/texto.js',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/public/texto.js'))
 })
app.post('/api/code',Text.Codefy)
app.post('/api/text',Code.Textfy)





app.listen(PORT,()=>{
    console.log('listening on port 3000');
})