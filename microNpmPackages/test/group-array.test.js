var groupArray = require('../group-array');
var expect = require('chai').expect;
var arr = [
    {tag: 'one', content: 'A'},
    {tag: 'one', content: 'B'},
    {tag: 'two', content: 'C'},
    {tag: 'two', content: 'D'},
    {tag: 'three', content: 'E'},
    {tag: 'three', content: 'F'}
  ];
var result = {
    one: [
      {tag: 'one', content: 'A'},
      {tag: 'one', content: 'B'}
    ],
    two: [
      {tag: 'two', content: 'C'},
      {tag: 'two', content: 'D'}
    ],
    three: [
      {tag: 'three', content: 'E'},
      {tag: 'three', content: 'F'}
    ]
  };
// describe('group-array',()=>{
//     it('应该返回一个对象',()=>{
//         expect(groupArray(arr)).to.be.an('object');
//     })
//     it('应该返回一个相等的对象',()=>{
//         expect(groupArray(arr)).to.eql(result);
//     })
// })