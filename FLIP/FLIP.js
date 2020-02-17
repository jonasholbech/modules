export default class FLIP {
  constructor(el) {
    this.el = el;
    this.first = null;
    this.last = null;
  }
  logInitialPosition() {
    this.first = this.el.getBoundingClientRect();
  }
  logFinalPosition() {
    this.last = this.el.getBoundingClientRect();
  }
  animate(duration) {
    const deltaX = this.first.left - this.last.left;
    const deltaY = this.first.top - this.last.top;
    this.el.animate(
      [
        {
          transformOrigin: "top left",
          transform: `translate(${deltaX}px, ${deltaY}px)`
        },
        {
          transformOrigin: "top left",
          transform: "none"
        }
      ],
      {
        duration: duration,
        easing: "ease-in-out",
        fill: "both"
      }
    );
  }
}
