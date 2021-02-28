const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

let dateHours = []

app.get("/api/date", (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
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

    const valuesDate = req.body
  //   const { hourIn, minIn, hourOut, minOut } = req.body;

  //   let valueHourIn = hourIn
  //   let valueMinIn = minIn
  //   let valueHourOut = hourOut
  //   let valueMinOut = minOut
  

  //   const valuesDate = {
  //     valueHourIn,
  //     valueMinIn,
  //     DiurnoResult: "Diurno ok",
  //     valueHourOut,
  //     valueMinOut,
  //     NoturnoResult: "Noturno ok",
  //   };

  //  dateHours.push(valuesDate)

    res.status(200).send(valuesDate);

  } catch (error) {
    res.send(error.message);
  }

});

module.exports = app;
