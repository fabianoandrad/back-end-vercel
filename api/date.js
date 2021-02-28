const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

let dateHours = []

app.get("/api/date", (req, res) => {
  // dateHour =  [{
  //     valueHourDiurno: 12,
  //     valueMinDiurno: 12,
  //     DiurnoResult: "Diurno",
  //     valueHourNoturno: 12,
  //     valueMinNoturno: 12,
  //     NoturnoResult: "Noturno",
  //   }],
  

  res.status(200).send(dateHours);
});

app.post("/api/date", (req, res) => {

  try {

    //const valuesDate = req.body

    const { hourIn, minIn, hourOut, minOut } = req.body;

    let valueHourDiurno = hourIn
    let valueMinDiurno = minIn
    let valueHourNoturno = hourOut
    let valueMinNoturno = minOut
    let DiurnoResult = "Diurno"
    let NoturnoResult = "Noturno"
  

    const valuesDate = {
      valueHourDiurno,
      valueMinDiurno,
      DiurnoResult,
      valueHourNoturno,
      valueMinNoturno,
      NoturnoResult,
    };

   dateHours.push(valuesDate)

    res.status(200).send(valuesDate);

  } catch (error) {
    res.send(error.message);
  }

});

module.exports = app;
