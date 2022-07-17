const express = require('express')
const hbs = require('hbs')
const path = require('path')
const partialPath = path.join(__dirname,'../templetes/partials/')
const viewsPath = path.join(__dirname,'../templetes/views/')
const publicPath = path.join(__dirname,'../public/')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static(publicPath))
app.set('views',viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)




const news = require('./tools/news')
news((error,data)=>{
    if(error){
        app.get('error',(req,res)=>{
            res.render('404page',{
                error: 'Error Page'
            })
        })
    }
    else{
        app.get('/',(req,res)=>{
            res.render('index',data)
        })
    }
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})