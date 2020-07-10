// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const body = document.querySelector(".buttons");
for (let i = 1; i < 5; i++) {
  const element = document.getElementById(`btn${i}`);
  element.style.backgroundColor = "gold";
}
const toggleColor = (id, color) => {
  if ((id.style.backgroundColor = "gold")) {
    id.style.backgroundColor = color;
  } else {
    id.style.backgroundColor = "gold";
  }
};
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
      case:"reset":
      resetBtn():
    default:
      break;
  }
}
body.addEventListener("click", clicker);
