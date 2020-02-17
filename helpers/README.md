# Usage

## `shuffle`

```js
import { shuffle } from "./utils.js";
const deck = ["A", "Q", "K"];
shuffle(deck); // => [?,?,?]
```

## `getDistance`

```js
import { getDistance } from "./utils.js";
const a = {
  x: 1,
  y: 1
};
const b = {
  x: 100,
  y: 100
};
const distance = getDistance(a, b); // => 140.0071426749364
```

## `getRandomInt`

```js
import { getRandomInt } from "./utils.js";
const myRand = getRandomInt(1, 10); // => ?>0 && ? < 11
```

## `getDelta`

```js
import { getDelta } from "./utils.js";
const delta = getDelta({ x: 1, y: 1 }, { x: 100, y: 100 }, 5); // => { dX: 3.5355339059327378, dY: 3.5355339059327378 }
```

## `copyToClipboard`

```js
import { copyToClipboard } from "./utils.js";
copyToClipboard("awesome");
```
