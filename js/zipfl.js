'use strict';

module.exports = class Zipfl{

   calculate(list, start){
      let zipfl = [];

      list = list || [];

      if(list.length == 0)
         return zipfl;

      if ([null, undefined].indexOf(start) != -1)
         start = list[0];

      for (var i in list) {
         zipfl.push(start/(i*1+1));
      }

      return zipfl;
   }
}
