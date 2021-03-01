const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const { uuid } = require("uuidv4")

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

let dateHours = []

app.get("/api/date", (req, res) => {

  res.status(200).send(dateHours);

});

app.post("/api/date", (req, res) => {

  try {

    const { hourIn, minIn, hourOut, minOut, del } = req.body;

    let valueHourIn = parseInt(hourIn);
    let valueMinIn = parseInt(minIn);
    let valueHourOut = parseInt(hourOut);
    let valueMinOut = parseInt(minOut);
    if (valueHourOut == 00) valueHourOut = 24;
    let valueHourDiurno = 0;
    let valueMinDiurno = 0;
    let valueHourNoturno = 0;
    let valueMinNoturno = 0;
    let DiurnoResult = "Não fez horas diurnas!";
    let NoturnoResult = "Não fez horas noturnas!";
    let totalHours = 0;
    let totalMin = 0;

    // se entrada for diurna
    if (valueHourIn >= 5 && valueHourIn < 22) {
      //executa se saida é menor que 22hs
      if (valueHourOut >= 5 && valueHourOut < 22 && valueHourOut > valueHourIn) {
        //executa se minOut for < minIn
        if (valueMinOut < valueMinIn) {
          valueMinOut += 60;
          valueHourOut -= 1;

          valueMinDiurno = valueMinOut - valueMinIn;
          valueHourDiurno = valueHourOut - valueHourIn;
          DiurnoResult = "de horas diurnas";
        } else {
          valueMinDiurno = valueMinOut - valueMinIn;
          valueHourDiurno = valueHourOut - valueHourIn;
          DiurnoResult = "de horas diurnas";
        }

        //executa se saida é maior ou igual a 22hs
      } else {
        //resultado para hora diurna até as 22hrs
        if (valueMinIn == 0) {
          valueMinDiurno = 00 - valueMinIn;
          valueHourDiurno = 22 - valueHourIn;
          DiurnoResult = "de horas diurnas";
        } else {
          valueMinIn -= 60;
          valueHourIn += 1;

          valueMinDiurno = 00 - valueMinIn;
          valueHourDiurno = 22 - valueHourIn;
          DiurnoResult = "de horas diurnas";
        }

        //executa quando hora de saida for entre 22hrs e 24hrs
        if (valueHourOut >= 22 && valueHourOut < 24) {
          //resultado para hora noturna
          valueMinNoturno = valueMinOut - 0;
          valueHourNoturno = valueHourOut - 22;
          NoturnoResult = "de horas noturnas";
        } else {
          if (valueHourOut == 24) valueHourOut = 00;
          //se horario de saida passou das 00hr
          if (valueHourOut < 5) {
            valueMinNoturno = valueMinOut;
            valueHourNoturno = valueHourOut + 2;
            NoturnoResult = "de horas noturnas";
          } else {
            // calcular horas após as 5hs
            valueHourOut -= 5;

            valueMinDiurno += valueMinOut;
            valueHourDiurno += valueHourOut;

            if (valueMinDiurno >= 60) {
              valueMinDiurno -= 60;
              valueHourDiurno += 1;

            }

            valueMinNoturno = 00;
            valueHourNoturno = 07;
            NoturnoResult = "de horas noturnas";
          }
        }
      }
    }

    // ***************************** Se entrada for noturna *****************************
    if (valueHourIn >= 22 || valueHourIn < 5) {
      if (valueHourOut >= 22 && valueHourOut <= 24) {
        if (valueMinIn > valueMinOut) {
          valueMinOut += 60;
          valueHourOut -= 1;

          valueMinNoturno = valueMinOut - valueMinIn;
          valueHourNoturno = valueHourOut - valueHourIn;
          NoturnoResult = "de horas noturnas";
        } else {
          valueMinNoturno = valueMinOut - valueMinIn;
          valueHourNoturno = valueHourOut - valueHourIn;
          NoturnoResult = "de horas noturnas";
          //console.log("Passei aqui");
        }
      } else {
        //*********************Teste *****************

        if (valueHourOut == 24) valueHourOut = 00;

        if (valueMinIn == 0) {
          valueMinNoturno = 00 - valueMinIn;
          valueHourNoturno = 24 - valueHourIn;
        } else {
          valueMinIn -= 60;
          valueHourIn += 1;

          valueMinNoturno = 00 - valueMinIn;
          valueHourNoturno = 24 - valueHourIn;
        }

        // se caso entrada for entre 22hrs 00 e saida entre 00hr e 5hrs  
        if (valueHourIn >= 22 && valueHourOut > 00 && valueHourOut <= 5) {


          // somando horas entre 22hrs 00 e saida entre 00hr e 5hrs
          valueMinNoturno += valueMinOut
          valueHourNoturno += valueHourOut

          if (valueMinNoturno >= 60) {
            valueMinNoturno -= 60
            valueHourNoturno += 1
          }
          NoturnoResult = "de horas noturnas";


        } else {
          // calcular horas após as 5hs
          valueHourNoturno += 5

          valueHourOut -= 5;

          valueMinDiurno += valueMinOut;
          valueHourDiurno += valueHourOut;

          if (valueMinDiurno >= 60) {
            valueMinDiurno -= 60;
            valueHourDiurno += 1;
          }
          NoturnoResult = "de horas noturnas";
          DiurnoResult = " de horas diurnas";

        }
      }
    }

    const valueHourMin = {
      id: uuid(),
      valueHourDiurno,
      valueMinDiurno,
      DiurnoResult,
      valueHourNoturno,
      valueMinNoturno,
      NoturnoResult,
    };

    dateHours.push(valueHourMin);

    return res.json(valueHourMin);

  } catch (error) {
    res.send(error.message);
  }  

});

app.delete("/api/date", (req, res) => {

  try {

      dateHours = [];

    res.status(200).send("Deletado com sucesso!")
    
  } catch (error) {
    res.send(error.message);
  }

})

module.exports = app;
