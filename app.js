const express = require('express'),
      request = require('request')

const app = express()
app.set("view engine","ejs")

app.get('/', (req,res)=>{
    res.render('searchForm')
})

app.get('/results', (req,res)=>{
    // console.log(req.query)
    const searchQuery = req.query.search;
    const url = "http://www.omdbapi.com/?s="+searchQuery+"&apikey=8ff89f57"
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const results = JSON.parse(body); 
            // console.log(results)
            // res.send(results.Search[0].Title);
            res.render('results',{results:results})
        }
    })
})



app.listen(3010, ()=>{
    console.log("Server has started...")
})