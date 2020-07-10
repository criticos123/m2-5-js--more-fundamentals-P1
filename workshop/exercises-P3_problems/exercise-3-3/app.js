// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.
const body = document.querySelector(".buttons");
const resetBtn = () => {
  for (let i = 1; i < 5; i++) {
    const element = document.getElementById("btn" + i);
    element.style.backgroundColor = "gold";
    element.style.opacity = "1";
    if (i === 4 && element.classList.length > 0) {
      element.classList.remove("jitters");
    }
  }
};

const toggleColor = (id, color) => {
  if (id.style.backgroundColor === "gold") {
    id.style.backgroundColor = color;
  } else {
    id.style.backgroundColor = "gold";
  }
};
resetBtn();

function clicker(event) {
  const buttontarget = event.target.id;
  const buttonid = document.getElementById(buttontarget);
  switch (buttontarget) {
    case "btn1":
      if (buttonid.style.opacity === "0") {
        buttonid.style.opacity = "1";
      } else {
        buttonid.style.opacity = "0";
      }
      break;
    case "btn2":
      toggleColor(buttonid, "crimson");
      break;
    case "btn3":
      toggleColor(buttonid, "lightblue");
      break;
    case "btn4":
      buttonid.classList.toggle("jitters");
      break;
    case "reset":
      resetBtn();
    default:
      break;
  }
}
body.addEventListener("click", clicker);
