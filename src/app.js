let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  let randomWho = getRandomElement(who);
  let randomAction = getRandomElement(action);
  let randomWhat = getRandomElement(what);
  let randomWhen = getRandomElement(when);

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

window.onload = function() {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
};
