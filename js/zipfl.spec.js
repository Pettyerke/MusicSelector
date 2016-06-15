'use strict';

let expect = require('chai').expect;
let Zipfl = require('./zipfl');

describe('Zipfl', function(){
   let zipfl;

   beforeEach(function(){
      zipfl = new Zipfl();
   });

   describe('calculate', function(){
      it('should return empty array"', function(){
         let result = zipfl.calculate();
         expect(result).to.eql([]);
      });

      it('should return one long array with input"', function(){
         let result = zipfl.calculate([24]);
         expect(result).to.eql([24]);
      });

      it('should calculate Zipfl numbers on array', function(){
         let result = zipfl.calculate([12,7,42,69]);  
         expect(result).to.eql([12,6,4,3]);
      })
   });
});
