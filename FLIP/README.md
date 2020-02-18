# usage

## Basic usage

```js
import FLIP from "./FLIP.js";

const el = dom.deck.querySelector("div.flip-card:last-child");
el.style.zIndex = 100;
const flip = new FLIP(el);
flip.logFirstPosition();
somewhere.appendChild(el);
flip.logFinalPosition();
flip.animate(600);
```

## Methods and arguments

### Basic setup

```js
import FLIP from "./FLIP.js";
```

### `constructor`

```js
const flip = new FLIP(el, (scale = true));
```

If `scale` is true (default) the FLIP animation will use transform: scale.. to animate size changes

### `.logFirstPosition`, `.logLastPosition`

Stores the position of the element before and after transformations

### `logFirstToDOM`, `logLastToDOM`

Logs the position of the element (before or after) transformations to a data-attribute on the `el`

### `readFirstFromDOM`, `readLastFromDOM`

Reads data store with `logFirstToDOM`, `logLastToDOM` and sets the first and/or last position from the data-attribute

### `.clearDOM`

Removes data-attributes set with `logFirstToDOM`, `logLastToDOM`.

### `.animate(duration = 600, callback = null)`

Sets the duration of the animation and optionally a callback to be executed when the animation finishes

## Chaining

All methods can be chained (but since `.animate` has a duration, that one could trip you up).

### Example

```js
const flip = new FLIP(el).logFirstPosition().logFirstToDOM(); //...
```
