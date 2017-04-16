const expect  = require("chai").expect;
const MicroserviceClient = require('@microservice-framework/microservice-client');

require('dotenv').config();

describe('RECORD CRUD API',function(){
  var client = new MicroserviceClient({
    URL: "http://" + process.env.HOSTNAME + ":" + process.env.PORT,
    secureKey: process.env.SECURE_KEY,
  });

  var RecordID;
  var RecordToken;

  it('POST should return 200',function(done){
    var Record = {
      user: "example-user",
      body: "Example record body"
    }

    client.post(Record, function(err, handlerResponse){
      console.log(handlerResponse);
      RecordID = handlerResponse.id;
      RecordToken = handlerResponse.token;

      expect(err).to.equal(null);
      done();
    });
  });

  it('SEARCH should return 200',function(done){
    client.search({ "user": "example-user" }, function(err, handlerResponse){
      console.log(handlerResponse);
      expect(err).to.equal(null);
      expect(handlerResponse).to.not.equal(null);
      done();
    });
  });

  it('GET should return 200',function(done){
    client.get(RecordID, RecordToken, function(err, handlerResponse){
      console.log(handlerResponse);
      expect(err).to.equal(null);
      done();
    });
  });


  it('DELETE should return 200',function(done){
    client.delete(RecordID, RecordToken, function(err, handlerResponse){
      expect(err).to.equal(null);
      done();
    });
  });

  it('GET after delete should return nothing',function(done){
    client.get(RecordID, RecordToken, function(err, handlerResponse){
      expect(handlerResponse.message).to.equal('Not found');
      done();
    });
  });
});
