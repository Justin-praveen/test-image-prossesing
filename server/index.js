const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const data = require("./data.json");



const app = express();

const rout = require("./Rout/rout");


app.use(cors())
app.use(express.json());

app.use(morgan("dev"));


app.use("/",rout);





app.listen(7070,()=>console.log( `${data.data.length} connected`))

