const Footballer = require("../models/footballer.model");

exports.getFootballers = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    const footballers = await Footballer.find(query);
    res.status(200).json(footballers);
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.addFootballer = async (req, res) => {
  const footballerData = req.body;
  console.log("footballerData", footballerData);
  try {
    const newFootballer = new Footballer(footballerData);
    const result = await newFootballer.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.updateFootballer = async (req, res) => {
  try {
    const result = await Footballer.updateOne({ _id: req.params.id }, req.body);
    if(result.n === 0) return res.sendStatus(404)
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err)
  }
};

exports.removeFootballer = async (req, res) => {
  try {
    const result = await Footballer.deleteOne({ _id: req.params.id });
    if(result.n === 0) return res.sendStatus(404)
    res.sendStatus(204)
  } catch (err) {
    res.status(500).send(err)
  }
};