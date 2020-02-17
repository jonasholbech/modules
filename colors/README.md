# Usage

## `knownColors`

```js
import {knownColors} from "./knownColors.js';
console.log(knownColors);//["aliceblue","antiquewhite"...]
```

## color converters

```js
import {
  RGBToHex,
  RGBAToHexA,
  hexToRGB,
  hexAToRGBA,
  RGBToHSL,
  RGBAToHSLA,
  HSLToRGB,
  HSLAToRGBA,
  hexToHSL,
  hexAToHSLA,
  HSLToHex,
  HSLAToHexA,
  nameToRGB,
  nameToHex,
  nameToHSL
} from "./colors";
console.log(nameToHSL("pink")); //hsl(350,100%,87.6%)
```

## `getColorFormat`

```js
import { getColorFormat } from "./getColorFormat";
console.log(getColorFormat("#000")); //hex
```
