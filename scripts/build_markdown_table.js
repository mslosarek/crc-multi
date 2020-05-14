const fs = require('fs');
const path = require('path');
const table = require('markdown-table');

const models = require('../src/models.json');

const contents = [];
const cols = [
  ['names', 'Algorithm(s)'],
  ['width', 'Width'],
  ['check', 'Check'],
  ['poly', 'Poly'],
  ['init', 'Init'],
  ['refin', 'RefIn'],
  ['refout', 'RefOut'],
  ['xorout', 'XorOut'],
];

contents.push(cols.map(col => col[1]));

models.forEach(model => {
  const row = cols.map(col => {
    if (col[0] === 'names') {
      return model.names.map(n => n.replace(/_/g, '\\_')).join(', ');
    }
    return model[col[0]];
  });
  contents.push(row);
});

fs.writeFileSync(path.join(path.dirname(__filename), 'algorithms.md'), table(contents));
