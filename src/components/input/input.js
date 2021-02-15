import { log } from '../../log';

export const input = () => {
  const inputbox = document.querySelector("#inputbox");

  const clear = () => {
    inputbox.value = "";
    setInputHelperDefault();
  }

  const setInputHelperDefault = () => {
    const inputHelper = window.chaos.components.inputHelper || log().error("inputHelper has not been registered");
    inputHelper.setDefault();
  }

  const setInputHelperText = (text) => {
    const inputHelper = window.chaos.components.inputHelper || log().error("inputHelper has not been registered");
    inputHelper.setText(text);
  }

  // Events

  inputbox.addEventListener("input", (e) => {
    const value = e.target.value;
    log().information(value);

    if (value) {
      // TODO: This check might not be needed
      // reference with command list and give example if possible 
      setInputHelperText(value);  // Only set text if value can be found in the list of commands
    } else {
      setInputHelperDefault();
    }
  });

  inputbox.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      log().information(`enter: ${e.target.value}`);
      clear();
    }
  });

  return {
    inputbox,
    clear
  }
}