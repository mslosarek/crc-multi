const fs = require('fs');
const path = require('path');

const sunshineModels = require('./sunshineModels');

const convertValue = (value, name) => {
  try {
    if (name === 'width') {
      return Number(value);
    } else if (['refin', 'refout'].includes(name)) {
      return value === 'true' || value === true;
    } else if (['poly', 'init', 'xorout', 'check', 'residue'].includes(name)) {
      return BigInt(value);
    } else if (name === 'name') {
      return JSON.parse(value) || value;
    }
  } catch (err) {
    return value;
  }
  return value;
};

BigInt.prototype.toJSON = function stringify() { return `0x${this.toString(16)}`; };

const definitions = fs.readFileSync(path.join(path.dirname(__filename), 'models.txt'), 'utf8')
.split('\n')
.filter(l => l);

const models = definitions.map(definition => definition
.split(' ')
.reduce((col, item) => {
  const [name, value] = item.split('=');
  if (name && value) {
    return {
      ...col,
      [name]: convertValue(value, name),
    };
  }
  return col;
}, {}))
.map(model => ({
  ...model,
  names: [
    model.name,
  ],
}))
.filter(model => [8, 16, 32, 64].includes(model.width));

const definitionsAlternate = [
  'models_alternate_8.json',
  'models_alternate_16.json',
  'models_alternate_32.json',
]
.reduce((col, filename) => {
  const altContents = JSON.parse(fs.readFileSync(path.join(path.dirname(__filename), filename), 'utf8'));
  return [
    ...col,
    ...altContents,
  ];
}, [...sunshineModels])
.map(definition => Object.entries(definition).reduce((col, [name, value]) => ({
  ...col,
  [name]: convertValue(value, name),
}), {}));

definitionsAlternate.forEach(definition => {
  const model = models.find(m => (
    m.width === definition.width
    && m.refin === definition.refin
    && m.refout === definition.refout
    && m.poly === definition.poly
    && m.init === definition.init
    && m.xorout === definition.xorout
  ));
  if (model) {
    // console.log(`Found: ${definition.name}: ${model.name}`);
    if (!model.names.includes(definition.name)) {
      model.names.push(definition.name);
    }
  } else {
    // console.log(`Unable to find ${definition.name}`);
  }
});

fs.writeFileSync(path.join(path.dirname(__filename), '../src/models.json'), JSON.stringify(models, null, 2));
