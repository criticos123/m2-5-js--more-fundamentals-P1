// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement
const body = document.querySelector("body");
element = document.querySelector(".buttons");
function clicker(event) {
  const buttontarget = event.target.id;
  const buttonid = document.getElementById(buttontarget);
  switch (buttontarget) {
    case "btn1":
      buttonid.style.opacity = 0;
      break;
    case "btn2":
      buttonid.style.backgroundColor = "crimson";
      break;
    case "btn3":
      buttonid.style.backgroundColor = "lightblue";
      break;
    case "btn4":
      buttonid.classList.add("jitters");
      break;
    default:
      break;
  }
}
element.addEventListener("click", clicker);
