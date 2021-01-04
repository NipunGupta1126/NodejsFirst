const hbs = require('hbs')
const express = require('express')
const path = require('path');
const geocode = require('./weatherApp/geocode.js')
const forecast = require('./weatherApp/forecast.js');
const { response } = require('express');

const ex = express();
const helperPath = path.join(__dirname,'/public');
const viewPath = path.join(__dirname,'/testViews/views')
const partialPath = path.join(__dirname,'/testViews/partials')

ex.set('view engine','hbs')
ex.set('views',viewPath)
ex.use(express.static(helperPath))
hbs.registerPartials(partialPath)

ex.get('',(req,res)=>{
    res.render('index',{
        title: 'what is your name',
        name: 'nipun'
    })
})
// ex.get('',(req,res)=>{
//     res.send("Hello Express!! , Home Page")
// })
ex.get('/location',(req,res)=>{
    res.render('weather',{
        
    })
})
ex.get('/help',(req,res)=>{
    res.send('Inside Hello page')
})

ex.get('/about',(req,res)=>{
    res.send('Inside about page')
})

ex.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error : 'Provide a Address'
        })
    }
    geocode(req.query.address,(error,response)=>{
        if(error){}
        forecast(response.lat,response.long,(error,response)=>{
            if(error){}
            else{
                res.send({
                    forecast : 'Sunny',
                    temperature : '-1.2',
                    address : req.query.address,
                    response : response
        
                    })

                }
            })
        
    
        })
})

ex.get('/help/*',(req,res)=>{
    res.render('404',{
        errormessage:'Help Page not found'
    })
})

ex.get('*',(req,res)=>{
    res.render('404',{
        errormessage:'Page not found'
    })
})





ex.listen(3000,()=>{
    console.log('STarting Server');
})