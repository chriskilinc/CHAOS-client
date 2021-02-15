import { input, inputHelper } from "./components";
import { log } from "./log";
import './style.css';

window.addEventListener('DOMContentLoaded', (event) => {
  initialize();
});

const initialize = () => {
  log().information("Initializing C.H.A.O.S.");
  window.chaos = {
    components: {}
  }
  registerComponents();
}


const registerComponents = () => {
  log().information("Register Components");

  window.chaos.components = {
    inputHelper: inputHelper(),
    input: input(),
  }
}
