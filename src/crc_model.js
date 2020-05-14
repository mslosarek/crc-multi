const modelDefinitionsRaw = require('./models.json');

const bigIntProperties = [
  'poly',
  'init',
  'xorout',
  'check',
  'residue',
];

const modelDefinitions = modelDefinitionsRaw.map(def => {
  const modelDefinition = { ...def };

  bigIntProperties.forEach(prop => {
    modelDefinition[prop] = BigInt(modelDefinition[prop]);
  });

  return modelDefinition;
});

function GetModel(name, size = null) {
  let nameToSearch = name;
  if (size && !name.startsWith('CRC-')) {
    nameToSearch = `CRC-${size}/${name}`;
  }

  const modelDefinition = modelDefinitions.find(md => md.name === nameToSearch);
  if (!modelDefinition) {
    throw new Error('Unknown Model Definition');
  }

  return modelDefinition;
}

module.exports = {
  modelDefinitions,
  GetModel,
};
