'use strict';

let expect = require('chai').expect;
let BestSongFinder = require('./bestsongfinder');
// let bsf = new BestSongFinder();


describe('BestSongFinder', function(){

  it('shouldn\'t be null', function(){
    let bsf = new BestSongFinder();

    expect(bsf).to.not.equal(null);
  });

  it('should find() exist', function(){
    let bsf = new BestSongFinder();

    expect(bsf.find).to.not.equal(undefined);
  });  

  it('should return empty array if no input',function(){
     let bsf = new BestSongFinder();

     let result = bsf.find();
     expect(result).to.eql([]);
  });

    it('should return empty array',function(){
      let bsf = new BestSongFinder([], 3);

      let result = bsf.find();
      expect(result).to.eql([]);
    });  

  it('should sort array and return top 3',function(){
    let list = [{ Frequency: 4, Title: '1'},
                 { Frequency: 1, Title: '2'},
                 { Frequency: 2,  Title: '3'},
                 { Frequency: 3, Title: '4'}
                ];
    let expected = [
      { Title: '4' }, 
      { Title: '3' }, 
      { Title: '1' }
    ];

    let bsf = new BestSongFinder(list, 3);

    let result = bsf.find();
    expect(result).to.eql(expected);
  });
});