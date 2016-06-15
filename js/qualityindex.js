'use strict';

let Zipfl = require('./zipfl');

module.exports = class QualityIndex{
   constructor(){

   }

   calculateList(list) {
      let zipfl = new Zipfl();
      let pred = zipfl.calculate(list);

      if ([[], undefined, null].indexOf(list) != -1)
         return [];

      return list.map((a,i) => a/pred[i]);
   }

   calculate(list, property){
      list = list || [];
   
      if(list.length == 0)
         return list;

      let start = list[0][property]

      let zipfl = new Zipfl();
      let pred = zipfl.calculate(list,start);

      return list.map((item,i) =>  { item.Quality = item[property]/pred[i]; return item; });
   }
}
