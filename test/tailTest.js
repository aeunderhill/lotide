const assert = require('chai').assert
const tail = require('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);



describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

});


  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result[0], 'Lighthouse');

  });