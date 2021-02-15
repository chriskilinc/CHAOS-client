export const inputHelper = () => {
  const inputHelper = document.querySelector("#helper");
  const paragraph = inputHelper.querySelector("p");
  const icon = inputHelper.querySelector(".icon-button");

  const setText = (text) => {
    paragraph.innerText = text;
  }

  const getText = () => {
    return paragraph.innerText;
  }

  const setDefault = () => {
    setText("Press Shift to auto complete and use Arrows to navigate through examples")
  }

  icon.addEventListener("click", () => {
    setDefault();
  });

  setDefault();

  return {
    inputHelper,
    setText,
    getText,
    setDefault,
  }
}
