
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get("/api/date", (req, res) => {


  const dateHours = [{
    valueHourDiurno: 12,
    valueMinDiurno: 12,
    DiurnoResult: "Diurno",
    valueHourNoturno: 12,
    valueMinNoturno: 12,
    NoturnoResult: "Noturno"
  }]
 
  res.status(200).send(dateHours);
})


app.post("/api/date", (req, res)=>{

  try {
    const values = []
const { hourIn, minIn, hourOut, minOut, del } = req.body;

//  const dateHours = [{
//   valueHourDiurno: 22,
//   valueMinDiurno: 33,
//   DiurnoResult: "Diurno ok",
//   valueHourNoturno: 44,
//   valueMinNoturno: 55,
//   NoturnoResult: "Noturno ok"
// }]
  
//return res.json(values)
  res.status(200).send({})
    
  } catch (error) {
    res.status(400).send({error})
  }

})

 module.exports = app
