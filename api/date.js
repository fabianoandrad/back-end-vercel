const express = require("express");
const app = express();
const cors = require("cors");

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
    const valuesHours = req.body;


    const valuesDate = {
      valueHourDiurno: parseInt(valuesHours.hourIn),
      valueMinDiurno: parseInt(valuesHours.minIn),
      DiurnoResult: "Diurno ok",
      valueHourNoturno: parseInt(valuesHours.hourOut),
      valueMinNoturno: parseInt(valuesHours.minOut),
      NoturnoResult: "Noturno ok",
    };

   dateHours.push(valuesDate)

    res.status(200).send(valuesDate);

  } catch (error) {
    res.send(error.message);
  }

});

module.exports = app;
