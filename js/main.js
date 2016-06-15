'use strict';


var http = require("http");

let express = require('express');
let app = express();
let AlbumStore = require('./albumstore');

let albumList = new AlbumStore();


//routes
app.get('/', function (req, res) {
   res.status(200).send('/albums\n'+
                        '/albums/:id/\n'+
                        '/albums/:id/best?top=n\n');
});

app.get('/albums', function (req, res) {

   // res.status(200).send("Simple Fine");
   res.status(200).send(albumList.getAlbums());

});

app.get('/albums/:id', function (req, res) {

	// console.log("/albums/:id");

	let params = req.params;
	let id = params.id;

	// console.log({id});
   // res.status(200).send("Simple Fine");

   try{
      res.status(200).send(albumList.getAlbum(id));
   }catch(e){
      res.status(400).send({ Error: e });
   }

});

app.get('/albums/:id/best', function (req, res) {

   let params = req.params;
   let id = params.id;
   let n = req.query.top;

   if([null, undefined].indexOf(n) == -1) {
      try {
         res.status(200).send(albumList.getBestSongs(id, n));
      } catch(e) {
         res.status(400).send({ Error: e });
      }
   } else {
      res.status(400).send({ Error: "top is not defined!" });
   }
});

app.post('/albums', function (req, res) {
   albumList.addAlbum(req.body);
   res.status(200).send(
      {
         Id: albumList.size() - 1
      }
   );
});


let server = app.listen(8081, function () {
   let port = server.address().port;
   console.log('Server running at http://127.0.0.1:8081/');
});
module.exports = server;

// Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

