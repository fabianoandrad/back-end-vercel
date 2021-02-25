// module.exports = (req, res) => {
//   const date = new Date().toString();
//   res.status(200).send(date);
// };

module.exports = (req, res) => {
  const dateHours = {
    test1: 01,
    test2: 02,
    test3: 03
  }
  res.status(200).send(dateHours);
};

