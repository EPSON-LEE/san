const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse');
const t = require('@babel/types');
const example = require('@decode/example');

console.log(example());