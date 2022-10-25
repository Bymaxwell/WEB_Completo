//JSON -> Java Script Object Notation

const obj_1 = {a: 1, b: 2, c: 3, soma(){return a+b+c}}

console.log(JSON.stringify(obj_1))

//console.log(JSON.parse("{a:1, b:2, c:3}"))

//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{"a": 11.7, "b": "Olá, meu nome é", "c": true, "d": {}, "e": []}'))