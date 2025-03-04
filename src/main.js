import { createProgressBlock } from "./ProgressBlock/ProgressBlock.js";

const progress  = createProgressBlock(document.getElementById("progressBlock"));

document.getElementById("valueInput").addEventListener("input", (e) => {
  let value = e.target.value;

  value = value.replace(/^0+/, "");
  if (value !== "" && parseInt(value, 10) > 100) {
    e.target.value = "100";
  } else {
    e.target.value = value;
  }

  progress.setValue(parseInt(e.target.value, 10) || 0);
});

document.getElementById("animateToggle").addEventListener("change", (e) => {
  progress.setAnimate(e.target.checked);
});

document.getElementById("hideToggle").addEventListener("change", (e) => {
  progress.setVisible(!e.target.checked);
});
