'use strict';

let request = require('supertest');


describe('Main test', function(){
  let server;

  beforeEach(function(){
    server = require('./main');
  });

  afterEach(function(){
    server.close();
  });

  it('should respond 200 to /', function(done){
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('should respond 200 to /albums', function(done){
    request(server)
      .get('/albums')
      .expect(200, done);
  });

  it('should respond 400 to /albums/:n if Id not exists', function(done){
    request(server)
      .get('/albums/0/')
      .expect(400, done);
  });

  it('should respond 400 to /albums/:n/best if no parameter', function(done){
    request(server)
      .get('/albums/1/best')
      .expect(400, done);
  });
});