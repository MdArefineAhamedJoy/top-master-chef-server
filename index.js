const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())
const chefData = require('./chef.json')

const port = 5000

app.get("/", (req , res)=>{
    res.send("hello")
})
app.get('/topChef', (req , res)=>{
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })