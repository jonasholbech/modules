export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function getDistance(o1, o2) {
  var difx = o2.x - o1.x;
  var dify = o2.y - o1.y;
  var t = Math.sqrt(difx * difx + dify * dify);
  return t;
}
export function getRandomInt(min, max) {
  if (min === undefined) {
    throw new Error("getRandomInt must have at least one parameter: max");
  }
  // If one parameter is given, use it as max and default min to 0
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getDelta(start, end, speed) {
  var dy = end.y - start.y;
  var dx = end.x - start.x;
  var distance = Math.sqrt(dx * dx + dy * dy);
  dx /= distance;
  dy /= distance;
  dx *= speed;
  dy *= speed;
  return { dX: dx, dY: dy };
}

export const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  console.log(`copied ${str} to clipboard`);
};
