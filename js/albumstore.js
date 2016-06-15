'use strict';

let BestSongFinder = require('./bestsongfinder');

module.exports = class AlbumStore{
   constructor(){
      this.albums = [];
   }

   getBestSongs(id,n){
      id = id || 0;
      let album = this.getAlbum(id)

      let finder = new BestSongFinder(album, n);
      return finder.find();
   }

   size(){
      return this.albums.length;
   }

   addAlbum(album){
      this.albums.push(album);
   }

   getAlbum(id){
      id = id || 0;
      let result = this.albums[id];
      if (result == undefined)
         throw new Error("OutOfRangeException");
      return result; 
   }

   getAlbums(){
      return this.albums.map((a,i) => ({ Id: i, Songs: this.albums[i] }));
   }
}
