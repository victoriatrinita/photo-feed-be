let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Photos API", () => {
  describe("GET /", () => {
    it("It should GET all the photos", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.response.length.should.be.eq(20);
          response.body.response[0].should.have.property("title");
          response.body.response[0].should.have.property("link");
          response.body.response[0].should.have.property("media");
          response.body.response[0].should.have.property("date_taken");
          response.body.response[0].should.have.property("description");
          response.body.response[0].should.have.property("published");
          response.body.response[0].should.have.property("author");
          response.body.response[0].should.have.property("author_id");
          response.body.response[0].should.have.property("tags");
        });
      done();
    });
  });
});
