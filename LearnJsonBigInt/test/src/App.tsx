import React from 'react';
import JSONBig from 'json-bigint';

console.log('-------1', '{ "a" : 9223372036854775807, "b": 123 }');
console.log('-------1.1', JSONBig.parse('{ "a" : 9223372036854775807, "b": 123 }'));
console.log('-------1.2', JSON.stringify(JSONBig.parse('{ "a" : 9223372036854775807, "b": 123 }')));

function App() {
  let a = JSONBig.parse('{ "a" : 9223372036854775807, "b": 123 }');

  return (
    <div className="App">
      <div>test</div>
      <div>aaa: {BigInt(10)}</div>
      <div>bbb: {a.a.toString()}</div>
    </div>
  );
}

export default App;
