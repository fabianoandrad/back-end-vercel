// module.exports = (req, res) => {
//   const date = new Date().toString();
//   res.status(200).send(date);
// };

const cors = require('cors')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  

  const dateHours = [{
    valueHourDiurno: 01,
    valueMinDiurno: 02,
    DiurnoResult: 03,
    valueHourNoturno: 04,
    valueMinNoturno: 05,
    NoturnoResult: 03
  }]
  res.status(200).send(dateHours);
};




// const allowCors = fn => async (req, res) => {
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   // another common pattern
//   res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//   )
//   if (req.method === 'OPTIONS') {
//     res.status(200).end()
//     return
//   }
//   return await fn(req, res)
// }

// const handler = (req, res) => {
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//   res.json({
//         body: req.body,
//         query: req.query,
//         cookies: req.cookies,
//       })
      
//       const dateHours = [{
    
//         valueHourDiurno: body,
//         valueMinDiurno: query,
//         DiurnoResult: 'Diurno',
//         valueHourNoturno: cookies,
//         valueMinNoturno: 05,
//         NoturnoResult: 'Noturno'
//       }]
//       res.status(200).send(dateHours);
// }

// module.exports = allowCors(handler)