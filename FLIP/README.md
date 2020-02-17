# usage

```js
import FLIP from "./FLIP.js";

const el = dom.deck.querySelector("div.flip-card:last-child");
el.style.zIndex = 100;
const flip = new FLIP(el);
flip.logInitialPosition();
somewhere.appendChild(el);
flip.logFinalPosition();
flip.animate(600);
```
