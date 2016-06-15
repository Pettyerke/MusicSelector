'use strict';

let expect = require('chai').expect;
let AlbumStore = require('./albumstore');
let BestSongFinder = require('./bestsongfinder');

describe('AlbumStore', function(){
   let store;
   let romeoverzik = [
                     { Frequency:66, Title: "Ártatlan vagyok"},
                     { Frequency:7, Title: "Amitől félsz"},
                     { Frequency:72, Title: "Együtt két lánnyal"}
                  ];
   let brody = [
                  { Frequency: 97, Title:"Nyugger dal"},
                  { Frequency: 112, Title:"Ezek ugyanazok"},
                  { Frequency: 3, Title:"Filléres emlékeim"}
               ];

   beforeEach(function(){
      store = new AlbumStore();
   });

   describe('size', function () {
      it('should return 0, no albums were added', function () {
         let result = store.size();
         expect(result).to.eql(0);
      });

      it('should return 2 if I add 2 albums', function () {
         store.addAlbum(brody);
         store.addAlbum(romeoverzik);

         let result = store.size();
         expect(result).to.eql(2);
      });
   });

   describe('add album', function () {
      it('should add 1 album to the list', function () {
         store.addAlbum(brody);
         let result = store.albums;
         expect(result).to.eql([brody]);
      });

      it('should add 2 albums to the list', function () {
         store.addAlbum(brody);
         store.addAlbum(romeoverzik);

         let result = store.albums;
         expect(result).to.eql([brody,romeoverzik]);
      });
   });

   describe('get album(id)', function () {
      it('should return error on no parameter', function () {
         expect(() => store.getAlbum()).to.throw("OutOfRangeException");
      });

      it('should return error on invalid id', function () {
         store.addAlbum(brody);
         expect(() => store.getAlbum(1)).to.throw("OutOfRangeException");
      });

      it('should return albums and ids', function () {
         store.addAlbum(brody);
         store.addAlbum(romeoverzik);

         let result = store.getAlbum(1);
         expect(result).to.eql(romeoverzik);
      });
   });

   describe('get albums', function () {
      it('should return empty array if no albums where added', function () {
         let result = store.getAlbums();
         expect(result).to.eql([]);
      });

      it('should return albums and ids', function () {
         store.addAlbum(brody);
         store.addAlbum(romeoverzik);

         let result = store.getAlbums();
         expect(result).to.eql([{ Id:0, Songs: brody },{ Id:1, Songs: romeoverzik }]);
      });
   });

   describe('get best song(id,n)', function () {
      it('should throw error on incorrect id', function () {
         store.addAlbum(brody);
         expect(() => store.getBestSongs(1,1)).to.throw("OutOfRangeException");
      });

      it('should use BestSongFinder to calculate the best n songs', function () {         
         let finder = new BestSongFinder(brody,1);
         let finderCalculated = finder.find();

         store.addAlbum(brody);
         let result = store.getBestSongs(0,1);

         store.addAlbum(brody);
         expect(result).to.eql(finderCalculated);
      });
   });

});
