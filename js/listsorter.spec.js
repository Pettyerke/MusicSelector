'use strict';

let expect = require('chai').expect;
let ListSorter = require('./listsorter');

describe('ListSorter', function(){
   let sorter;

   beforeEach(function(){
      sorter = new ListSorter();
   });

   describe('asc', function(){
      it('should return empty array on no input', function(){
         var result = sorter.asc();
         expect(result).to.eql([]);
      });

      it('should return the array if the size is 1', function(){
         var result = sorter.asc([1]);
         expect(result).to.eql([1]);
      });

      it('should return the array in asc order', function(){
         var result = sorter.asc([1,3,5,7,9,2,4,6,8]);
         expect(result).to.eql([1,2,3,4,5,6,7,8,9]);
      });

      it('should return empty array on no input with param', function(){
         var result = sorter.asc([],'Frequency');
         expect(result).to.eql([]);
      });

      it('should return the array if size is 1 with param', function(){
         var result = sorter.asc([{ Frequency: 1, Title: "1"}], "Frequency");
         expect(result).to.eql([{ Frequency: 1, Title: "1"}]);
      });

      it('should return the array in asc order with param', function(){
         var result = sorter.asc([{ Frequency: 1, Title: "1"}, { Frequency: 3, Title: "3"}, { Frequency: 2, Title: "2"}], "Frequency");
         expect(result).to.eql([{ Frequency: 1, Title: "1"}, { Frequency: 2, Title: "2"}, { Frequency: 3, Title: "3"}]);
      });

   });

   describe('desc', function(){
      it('should return empty array on no input', function(){
         var result = sorter.desc();
         expect(result).to.eql([]);
      });

      it('should return the array if the size is 1', function(){
         var result = sorter.desc([1]);
         expect(result).to.eql([1]);
      });

      it('should return the array in desc order', function(){
         var result = sorter.desc([1,3,5,7,9,2,4,6,8]);
         expect(result).to.eql([9,8,7,6,5,4,3,2,1]);
      });

      it('should return empty array on no input with param', function(){
         var result = sorter.desc([],'Frequency');
         expect(result).to.eql([]);
      });

      it('should return the array if size is 1 with param', function(){
         var result = sorter.desc([{ Frequency: 1, Title: "1"}], "Frequency");
         expect(result).to.eql([{ Frequency: 1, Title: "1"}]);
      });

      it('should return the array in desc order with param', function(){
         var result = sorter.desc([{ Frequency: 1, Title: "1"}, { Frequency: 3, Title: "3"}, { Frequency: 2, Title: "2"}], "Frequency");
         expect(result).to.eql([{ Frequency: 3, Title: "3"}, { Frequency: 2, Title: "2"}, { Frequency: 1, Title: "1"}]);
      });

   });

});
