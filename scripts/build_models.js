const fs = require('fs');
const path = require('path');

BigInt.prototype.toJSON = function stringify() { return `0x${this.toString(16)}`; };

const definitions = fs.readFileSync(path.join(path.dirname(__filename), 'models.txt'), 'utf8')
.split('\n')
.filter(l => l);

const convertValue = (value, name) => {
  if (name === 'width') {
    return Number(value);
  } else if (['refin', 'refout'].includes(name)) {
    return value === 'true';
  } else if (['poly', 'init', 'xorout', 'check', 'residue'].includes(name)) {
    return BigInt(value);
  } else if (name === 'name') {
    return JSON.parse(value) || value;
  }

  return value;
};

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
.filter(model => [8, 16, 32, 64].includes(model.width));

fs.writeFileSync(path.join(path.dirname(__filename), '../src/models.json'), JSON.stringify(models, null, 2));
