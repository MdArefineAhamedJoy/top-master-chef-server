const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())
const chefData = require('./data/chef.json')
const chefDetails = require('./data/chefDetails.json')
const chefAward = require('./data/award.json')
const items = require('./data/popularItem.json')
const port = 5000

app.get("/", (req , res)=>{
    res.send("hello")
})
app.get('/chefData', (req , res)=>{
    res.send(chefData)
})
app.get('/chefDetails',(req , res )=>{
    res.send(chefDetails)
})
app.get('/chefDetails/:id', (req , res)=>{
    const id = req.params.id;
    console.log(id)
    console.log(id)
    const chef = chefDetails.find(n => parseInt(n.id) === parseInt( id));
    console.log(chef)
    res.send(chef)
})
app.get("/award", (req , res)=>{
    res.send(chefAward)
})
app.get("/items", (req , res)=>{
    res.send(items)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })