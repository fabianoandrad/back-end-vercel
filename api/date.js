const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/date", (req, res) => {
  const dateHours = [
    {
      valueHourDiurno: 12,
      valueMinDiurno: 12,
      DiurnoResult: "Diurno",
      valueHourNoturno: 12,
      valueMinNoturno: 12,
      NoturnoResult: "Noturno",
    },
  ];

  res.status(200).send(dateHours);
});

app.post("/api/date", (req, res) => {

  try {
    const { hourIn, minIn, hourOut, minOut } = req.body;
    const dateHours = [];

    dateHours = {
      valueHourDiurno: hourIn,
      valueMinDiurno: minIn,
      DiurnoResult: "Diurno ok",
      valueHourNoturno: hourOut,
      valueMinNoturno: minOut,
      NoturnoResult: "Noturno ok",
    };

    res.status(200).send(dateHours);

  } catch (error) {
    res.send(error);
  }
  
});

module.exports = app;
