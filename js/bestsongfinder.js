'use strict';

let QualityIndex = require('./qualityindex');
let ListSorter = require('./listsorter');

module.exports = class BestSongFinder{
   constructor(album, n){
      this.album = album;
      this.n = n;
   }

   find(){
		// return "Not Implemented";
		let qi = new QualityIndex();
		let ls = new ListSorter();

		let albumWithQualities = qi.calculate(this.album, 'Frequency');
		let sortedAlbum = ls.desc(albumWithQualities, 'Quality');

		return sortedAlbum.map(a => ({ Title: a.Title })).slice(0, this.n);
   }
}