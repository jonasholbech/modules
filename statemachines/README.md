# Usage

```js
import StateMachine from "./statemachine.js";
//import statechart from "./statechart.js"
const statechart = {
  id: "blackjack",
  initial: "loaded",
  states: {
    loaded: {
      on: { next: "startNewRound" }
    },
    startNewRound: {
      on: { next: "waitingForPlayer" }
    },
    waitingForPlayer: {
      on: { draw: "drawCard", hold: "waitingForAI" }
    },
    drawCard: {
      on: {
        next: "waitingForPlayer",
        busted: "resolveRound",
        blackjack: "waitingForAI"
      }
    },
    waitingForAI: {
      on: { draw: "AIDrawCard" }
    },
    AIDrawCard: {
      on: {
        next: "waitingForAI",
        busted: "resolveRound",
        blackjack: "resolveRound",
        hold: "resolveRound"
      }
    },
    resolveRound: {
      on: { next: "startNewRound" }
    }
  }
};

const machine = new StateMachine(statechart);
window.addEventListener("load", () => {
  machine.transition("next");
  //machine.transition("draw");...
});
```
