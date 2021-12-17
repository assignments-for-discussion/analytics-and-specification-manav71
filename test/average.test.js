const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('ignores outliers in the input', () => {
  expect(average([5, 8, 11, 20, 30, 40, 1500])).to.be.approximately(19, 0.01);
});

it('ignores outliers and NaN in the input', () => {
  expect(average([5,NaN, 8, 11, 20, 2000])).to.be.approximately(11, 0.01);
});

it('reports the average as NaN on an list of NaN', ()=> {
  expect(average([NaN, NaN, NaN, NaN])).to.be.NaN;
});
