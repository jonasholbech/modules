console.log(import.meta.url);
export const statechart = {
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
