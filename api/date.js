// module.exports = (req, res) => {
//   const date = new Date().toString();
//   res.status(200).send(date);
// };

module.exports = (req, res) => {
  const dateHours = new Date().toString();
  res.status(200).send(dateHours);
};

