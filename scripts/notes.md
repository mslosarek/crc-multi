# Model Descriptions and Test Vector

## Source

http://reveng.sourceforge.net/crc-catalogue/

### Capture Definition From Page

In the JS console:
http://reveng.sourceforge.net/crc-catalogue/all.htm

```javascript
let codetext = [];
let codes = document.querySelectorAll('code');
for (let i = 0; i < codes.length; i++) {
  if (codes[i].innerText.includes('width=')) {
    codetext.push(codes[i].innerText);
  }
}
copy(codetext.join('\n'));
```

### Source 2

In the JS console:
https://crccalc.com/?crc=123456789&method=crc8&datatype=ascii&outtype=hex
https://crccalc.com/?crc=123456789&method=crc16&datatype=ascii&outtype=hex
https://crccalc.com/?crc=123456789&method=crc32&datatype=ascii&outtype=hex

```javascript
// let width = 8;
// let width = 16;
let width = 32;

let tableRows = document.getElementById('CRCBlock').querySelectorAll('table tr');

let definitions = [];
for (let i = 1; i < tableRows.length; i++) {
  const tableRow = tableRows[i];
  const cells = tableRow.querySelectorAll('td');

  const definition = {
    width,
    name: cells[0].innerText,
    check: cells[2].innerText,
    poly: cells[3].innerText,
    init: cells[4].innerText,
    refin: cells[5].innerText.trim() === 'true',
    refout: cells[6].innerText.trim() === 'true',
    xorout: cells[7].innerText,
  };
  definitions.push(definition);
}

copy(JSON.stringify(definitions, null, 2));
```
