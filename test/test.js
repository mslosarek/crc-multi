/* eslint func-names: ["error", "never"] */
/* eslint prefer-arrow-callback: 0 */

const chai = require('chai');

const { expect } = chai;

const { CRCModel, CRC } = require('../src');

const { modelDefinitions } = CRCModel;

describe('CRC', function() {
  describe('#compute', function() {
    it('calculates the proper checksum', function() {
      const bytes = Buffer.from('123456789');

      modelDefinitions.forEach(model => {
        const crc = new CRC(model);
        const crcValue = crc.compute(bytes);

        expect(crcValue.toString(16)).to.eq(model.check.toString(16));
      });
    });
  });
});

describe('CRCModel', function() {
  describe('#GetModel', function() {
    context('when a valid model name', function() {
      it('looks up a model by complete name', function() {
        const name = 'CRC-8/TECH-3250';
        const model = CRCModel.GetModel(name);
        expect(model.name).to.eq(name);
      });
    });

    context('when a partial model name and size', function() {
      it('looks up a model by complete name', function() {
        const name = 'CRC-8/TECH-3250';
        const partialName = 'TECH-3250';
        const model = CRCModel.GetModel(partialName, 8);
        expect(model.name).to.eq(name);
      });
    });

    context('when a not found', function() {
      it('throws an error', function() {
        const invalidName = 'CRC-8/NotValid';
        expect(() => {
          CRCModel.GetModel(invalidName);
        }).to.throw('Unknown Model Definition');
      });
    });
  });
});
