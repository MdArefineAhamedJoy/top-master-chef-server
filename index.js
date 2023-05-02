const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())
const chefData = require('./data/chef.json')

const port = 5000

app.get("/", (req , res)=>{
    res.send("hello")
})
app.get('/chefData', (req , res)=>{
    res.send(chefData)
})
app.get('/chefData/:id', (req , res)=>{
    const id = req.params.id;
    console.log(id)
    const chef = chefData.find(n => parseInt(n.id) === parseInt(id));
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })