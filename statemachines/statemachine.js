export default class StateMachine {
  constructor(statechart) {
    this.history = [];
    this.state = statechart.initial;
    this.transitions = statechart.states;
    this.div = document.createElement("div");
    this.div.id = "statemachine";
    document.body.appendChild(this.div);
  }
  showHistory() {
    l(this.history.join(" => "));
  }
  transition(transitionName) {
    this.history.push(transitionName);
    var nextState = this.transitions[this.state].on[transitionName];
    if (!nextState) {
      throw new Error(`invalid: ${this.state} -> ${transitionName}`);
    }

    this.state = nextState;
    if (typeof window[nextState] !== "function") {
      throw new Error(`function ${nextState} is not defined`);
    }

    this.stateChartDebugger();
    window[nextState]();
  }
  stateChartDebugger() {
    this.div.innerHTML = "";
    l(this.state, this.transitions[this.state].on);
    const entries = Object.entries(this.transitions[this.state].on);
    entries.forEach(entry => {
      const b = document.createElement("button");
      b.textContent = entry[0] + " " + entry[1];
      b.addEventListener("click", () => {
        this.transition(entry[0]);
      });
      this.div.appendChild(b);
    });
  }
}
