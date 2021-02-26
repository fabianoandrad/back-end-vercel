
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/api/date", (req, res) => {


  const dateHours = {
    valueHourDiurno: 12,
    valueMinDiurno: 12,
    DiurnoResult: "Diurno",
    valueHourNoturno: 12,
    valueMinNoturno: 12,
    NoturnoResult: "Noturno"
  }
  
  res.status(200).send(dateHours);
})


app.post("/api/date", (req, res)=>{

const values = []
  values = req.body;
  
  res.status(200).send(values)
})

 module.exports = app

