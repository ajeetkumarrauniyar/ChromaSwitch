const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const wrapper = document.querySelector(".wrapper");
// console.log(wrapper);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // if (e.target.id === "blue") {
    //   wrapper.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "green") {
    //   wrapper.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "yellow") {
    //   wrapper.style.backgroundColor = e.target.id;
    // } else {
    //   wrapper.style.backgroundColor = e.target.id;
    // }
    switch (e.target.id) {
      case "green":
        wrapper.style.backgroundColor = "green";
        break;
      case "yellow":
        wrapper.style.backgroundColor = "yellow";
        break;
      case "blue":
        wrapper.style.backgroundColor = "blue";
        break;
      default:
        wrapper.style.backgroundColor = "red";
        break;
    }
  });
});
