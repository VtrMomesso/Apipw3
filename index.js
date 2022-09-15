const express= require ("express");
const req = require("express/lib/request");
const app = express();

app.get("/", (req, res)=> {
    res.send("O pai chegou");

});

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000");
})
