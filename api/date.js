// module.exports = (req, res) => {
//   const date = new Date().toString();
//   res.status(200).send(date);
// };

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  const value = req.body;

  const value = body.name;

  const dateHours = [
    {
      valueHourDiurno: value,
      valueMinDiurno: 02,
      DiurnoResult: "Diurno",
      valueHourNoturno: 04,
      valueMinNoturno: 05,
      NoturnoResult: "Noturno",
    },
  ];
  res.status(200).send(dateHours);
};
