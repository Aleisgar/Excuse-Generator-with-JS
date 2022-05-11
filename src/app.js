/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log(generateExcuse());
};

let who = ["My neighbour", "My grandma", "A snail", "His snake"];
let action = [" ate", " fell into", " bit", " ran over"];
let what = [" my food", " a chair", " my bike", " a cat"];
let when = [
  " when going for a walk",
  " when I arrived",
  " while I was sleeping",
  " during my classes",
  " at night"
];
// ejercicio con código extendido. Provar con código optimizado

const generateExcuse = arr => {
  let indexWho = Math.floor(Math.random(who) * who.length);
  let indexAction = Math.floor(Math.random(action) * action.length);
  let indexWhat = Math.floor(Math.random(what) * what.length);
  let indexWhen = Math.floor(Math.random(when) * when.length);

  return (
    who[indexWho] + action[indexAction] + what[indexWhat] + when[indexWhen]
  );
};

console.log(generateExcuse());
