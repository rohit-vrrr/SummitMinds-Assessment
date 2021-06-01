const express = require("express");
const data = require("./prize.json");
const _ = require("lodash");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

function searchByFirstName(data, fname) {
  var foundData = [];
  data.prizes.forEach((eachprize) => {
    eachprize.laureates.forEach((eachlaureates) => {
      if(_.lowerCase(eachlaureates.firstname) === fname) {
        foundData.push(eachlaureates);
      }
    })
  });
  return foundData;
}

app.get('/searchbyfirstname/:fname', (req, res) => {

  const fname = _.lowerCase(req.params.fname);

  const showData = searchByFirstName(data, fname);
  res.send(showData);

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
