const express= require ("express");
const artesMarcialController = require('./controller/artesMarcial');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", artesMarcialController);


app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000");
})
