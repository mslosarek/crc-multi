function Reflect8(val) {
  let resByte = BigInt(0);
  const biVal = BigInt(val);

  for (let i = BigInt(0); i < BigInt(8); i += BigInt(1)) {
    if ((biVal & (BigInt(1) << i)) !== BigInt(0)) {
      resByte |= ((BigInt(1) << (BigInt(7) - i)) & BigInt(0xFF));
    }
  }

  return resByte;
}

function ReflectGeneric(val, width) {
  let resByte = BigInt(0);
  const biVal = BigInt(val);

  for (let i = BigInt(0); i < BigInt(width); i += BigInt(1)) {
    if ((biVal & (BigInt(1) << i)) !== BigInt(0)) {
      resByte |= (BigInt(1) << (BigInt(width - 1) - i));
    }
  }

  return resByte;
}

function CastMask(width) {
  return BigInt(2 ** width) - BigInt(1);
}

function MsbMask(width) {
  return BigInt(0x01) << BigInt(width - 1);
}

function CrcTable(width, polynomial) {
  const crcTable = new Array(256);
  const castMask = CastMask(width);
  const msbMask = MsbMask(width);

  for (let divident = BigInt(0); divident < BigInt(256); divident += BigInt(1)) {
    let byte = (divident << BigInt(width - 8)) & castMask;

    for (let bit = 0; bit < 8; bit += 1) {
      if ((byte & msbMask) !== BigInt(0)) {
        byte <<= BigInt(1);
        byte ^= polynomial;
      } else {
        byte <<= BigInt(1);
      }
    }
    crcTable[divident] = (byte & castMask);
  }

  return crcTable;
}

module.exports = {
  Reflect8,
  ReflectGeneric,
  CastMask,
  MsbMask,
  CrcTable,
};
