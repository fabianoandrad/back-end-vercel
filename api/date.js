// module.exports = (req, res) => {
//   const date = new Date().toString();
//   res.status(200).send(date);
// };

module.exports = (req, res) => {

  console.log(req.body)
  //Habilita o cora no vercel
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  const { hourIn, minIn, hourOut, minOut, del } = req.body

  const reqBody = req.body
  let valueHourIn = parseInt(hourIn);
  let valueMinIn = parseInt(minIn);
  let valueHourOut = parseInt(hourOut);
  let valueMinOut = parseInt(minOut);


  const dateHours = [{
    valueHourDiurno: valueHourIn,
    valueMinDiurno: valueMinIn,
    DiurnoResult: 'Diurno',
    valueHourNoturno: 'Noturno',
    valueMinNoturno: valueHourOut,
    NoturnoResult: valueMinOut
  }]
  res.status(200).send();
};

