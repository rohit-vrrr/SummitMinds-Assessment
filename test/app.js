const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

// Assertion
chai.should();
chai.use(chaiHttp);

describe('Nobel Prize APIs', () => {

  describe("Test GET route /searchbyfirstname/:fname", () => {
    it("Should return all tasks", (done) => {
      chai.request(server)
        .get("/searchbyfirstname/Arthur")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.not.be.eq(0);
          done();
        });
    });
  });

  describe("Test GET route /searchbyyear/:year", () => {
    it("Should return all tasks", (done) => {
      chai.request(server)
        .get("/searchbyyear/2018")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.not.be.eq(0);
          done();
        });
    });
  });

  describe("Test GET route /search/", () => {
    it("Should return all tasks", (done) => {
      chai.request(server)
        .get("/search/?year=2018&category=chemistry")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.not.be.eq(0);
          done();
        });
    });
  });

});
