'use strict'

module.exports = class ListSorter{
   asc(list, prop){
      list = list || [];
      if([null, undefined].indexOf(prop) != -1)
         return list.sort();
      else
         return list.sort((a,b) => compareAsc(a[prop], b[prop]));
   }

   desc(list, prop) {
      list = list || [];
      if([null, undefined].indexOf(prop) != -1)
         return list.sort((a,b) => compareDesc(a,b));
      else
         return list.sort((a,b) => compareDesc(a[prop], b[prop]));
   }
}

function compareAsc(a,b){
   return a-b;
}

function compareDesc(a,b){
   return b-a;
}
