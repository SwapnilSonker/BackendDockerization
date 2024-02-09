require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req,res) => {
res.send("Hello Docker!!!"); 
})

app.listen(4000, ()=> {
    console.log(`Server is on port: ${4000}`)
})