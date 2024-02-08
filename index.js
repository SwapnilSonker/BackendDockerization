require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req,res) => {
res.send("Hello Swapnil");
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server is on port: ${process.env.PORT}`)
})