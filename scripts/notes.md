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
