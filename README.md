# crc-multi

JavaScript library to perform several different CRC calculations in pure JavaScript.

## About

This library is highly influenced by [Bastian Molkenthin's Online CRC JavaScript Web Site](http://www.sunshine2k.de/coding/javascript/crc/crc_js.html). There are a few differences, specifically, this library uses [JavaScript BigInts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) to perform calculations. As a result, it leads to a simplification of the code, but the response can't be directly used as an integer.

## CRC Models

This library currently supports the 8, 16, 32, and 64 Bit CRC Algorithms listed on the [RevEng CRC Catalogue](http://reveng.sourceforge.net/crc-catalogue/). More algorithms may work, but has not yet been tested. See the list of algorithms below for a complete list.

Each of the algorithms listed on that page include check value that is used to test the CRC calculation against the string `123456789`.

## Usage

```
const {
  CRC,
  CRCModel,
} = require('crc-multi');

const model = CRCModel.GetModel('CRC-16/ARC');
/*
{
  width: 16,
  poly: 32773n,
  init: 0n,
  refin: true,
  refout: true,
  xorout: 0n,
  check: 47933n,
  residue: 0n,
  name: 'CRC-16/ARC'
}
*/

const crc = new CRC(model);

const check = crc.compute(Buffer.from('123456789'));
// 47933n
assert(check === BigInt('0xbb3d'));
```

## Algorithm List

* CRC-8/AUTOSAR
* CRC-8/BLUETOOTH
* CRC-8/CDMA2000
* CRC-8/DARC
* CRC-8/DVB-S2
* CRC-8/GSM-A
* CRC-8/GSM-B
* CRC-8/I-432-1
* CRC-8/I-CODE
* CRC-8/LTE
* CRC-8/MAXIM-DOW
* CRC-8/MIFARE-MAD
* CRC-8/NRSC-5
* CRC-8/OPENSAFETY
* CRC-8/ROHC
* CRC-8/SAE-J1850
* CRC-8/SMBUS
* CRC-8/TECH-3250
* CRC-8/WCDMA
* CRC-16/ARC
* CRC-16/CDMA2000
* CRC-16/CMS
* CRC-16/DDS-110
* CRC-16/DECT-R
* CRC-16/DECT-X
* CRC-16/DNP
* CRC-16/EN-13757
* CRC-16/GENIBUS
* CRC-16/GSM
* CRC-16/IBM-3740
* CRC-16/IBM-SDLC
* CRC-16/ISO-IEC-14443-3-A
* CRC-16/KERMIT
* CRC-16/LJ1200
* CRC-16/MAXIM-DOW
* CRC-16/MCRF4XX
* CRC-16/MODBUS
* CRC-16/NRSC-5
* CRC-16/OPENSAFETY-A
* CRC-16/OPENSAFETY-B
* CRC-16/PROFIBUS
* CRC-16/RIELLO
* CRC-16/SPI-FUJITSU
* CRC-16/T10-DIF
* CRC-16/TELEDISK
* CRC-16/TMS37157
* CRC-16/UMTS
* CRC-16/USB
* CRC-16/XMODEM
* CRC-32/AIXM
* CRC-32/AUTOSAR
* CRC-32/BASE91-D
* CRC-32/BZIP2
* CRC-32/CD-ROM-EDC
* CRC-32/CKSUM
* CRC-32/ISCSI
* CRC-32/ISO-HDLC
* CRC-32/JAMCRC
* CRC-32/MPEG-2
* CRC-32/XFER
* CRC-64/ECMA-182
* CRC-64/GO-ISO
* CRC-64/WE
* CRC-64/XZ
