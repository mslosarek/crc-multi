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

function GetModel(name, width = null) {
  const modelDefinition = modelDefinitions.find(md => (
    md.names.includes(name)
    || (width && md.width === width && md.names.find(n => n.endsWith(name)))
  ));
  if (!modelDefinition) {
    throw new Error('Unknown Model Definition');
  }

  return modelDefinition;
}

module.exports = {
  modelDefinitions,
  GetModel,
};
