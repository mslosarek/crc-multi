const {
  Reflect8,
  ReflectGeneric,
  CastMask,
  CrcTable,
} = require('./utils');

class CRC {
  constructor(model) {
    this.model = model;
  }

  compute(bytes) {
    const {
      width,
      poly,
      init,
      refin,
      refout,
      xorout,
    } = this.model;

    const castMask = CastMask(width);
    const crcTable = CrcTable(width, poly);

    let crc = init;

    for (let i = 0; i < bytes.length; i += 1) {
      let byte = BigInt(bytes[i]) & BigInt(0xFF);

      if (refin) {
        byte = Reflect8(byte);
      }

      /* update the MSB of crc value with next input byte */
      crc = (crc ^ (byte << BigInt(width - 8))) & castMask;

      /* this MSB byte value is the index into the lookup table */
      const pos = (crc >> BigInt(width - 8)) & BigInt(0xFF);

      /* shift out this index */
      crc = (crc << BigInt(8)) & castMask;

      /* XOR-in remainder from lookup table using the calculated index */
      crc = (crc ^ crcTable[pos]) & castMask;
    }

    if (refout) {
      crc = ReflectGeneric(crc, width);
    }
    return ((crc ^ xorout) & castMask);
  }
}

module.exports = CRC;
