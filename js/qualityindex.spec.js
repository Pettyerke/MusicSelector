'use strict';

let expect = require('chai').expect;
let QualityIndex = require('./qualityindex');

describe('QualityIndex', function(){
   let quality;

   beforeEach(function(){
      quality = new QualityIndex('quality');
   });

   describe('calculateList', function(){
      it('should return empty list on no parameter', function(){
         let result = quality.calculateList();
         expect(result).to.eql([]);
      });

      it('should return 1 in array for 1 long input', function(){
         let result = quality.calculateList([24]);
         expect(result).to.eql([1]);
      });
      it('should calculate qi := vi/zi for a list', function(){
         let result = quality.calculateList([12,9,6,3]);
         expect(result).to.eql([1,1.5,1.5,1]);         
      });

   });

   describe('calculate', function(){
      it('should calculate qi := vi/zi for array of objects, append it', function(){
         let result = quality.calculate([{ Frequency: 24, Title:'24' },{ Frequency: 18, Title: '18' }],'Frequency');
         expect(result).to.eql([{ Frequency: 24, Title: '24', Quality: 1 },{Frequency: 18, Title: '18', Quality :1.5 }]);         
      })
   });   

});
