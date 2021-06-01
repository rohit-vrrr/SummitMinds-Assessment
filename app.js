const express = require("express");
const data = require("./prize.json");
const _ = require("lodash");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

function searchByFirstName(data, fname) {
  var foundData = [];
  data.prizes.forEach((eachPrize) => {
    eachPrize.laureates.forEach((eachLaureates) => {
      if(_.lowerCase(eachLaureates.firstname) === fname) {
        foundData.push(eachLaureates);
      }
    })
  });
  return foundData;
}

function searchByYear(data, year) {
  var foundData = [];
  data.prizes.forEach((item) => {
    if(item.year === year) {
      foundData.push(item);
    }
  });
  return foundData;
}

function searchByYearAndCategory(data, year, category) {
  var foundData = [];
  data.prizes.forEach((item) => {
    if(item.year === year & _.lowerCase(item.category) === category) {
      foundData.push(item);
    }
  });
  return foundData;
}

app.get('/searchbyfirstname/:fname', (req, res) => {

  const fname = _.lowerCase(req.params.fname);

  const showData = searchByFirstName(data, fname);
  res.send(showData);

});

app.get('/searchbyyear/:year', (req, res) => {

  const year = req.params.year;

  const showData = searchByYear(data, year);
  res.send(showData);
});

// query string parameters
app.get('/search/', (req, res) => {

  const year = req.query.year;
  const category = _.lowerCase(req.query.category);

  const showData = searchByYearAndCategory(data, year, category);
  res.send(showData);
});

module.exports = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
