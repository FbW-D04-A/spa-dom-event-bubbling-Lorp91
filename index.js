let classCircle = document.querySelectorAll(".circle");
let container = document.querySelector(".container");
let specialCircle = document.querySelector("#special-circle");

console.log("2:", classCircle);
console.log("2:", container);
console.log("2:", specialCircle);

container.addEventListener(
  "click",
  (e) => {
    console.log("3:", e);
    console.log("3:", e.target);
    console.log("3:", e.currentTarget);
    if (e.target.classList.contains("circle")) {
      container.removeChild(e.target);
    }
  },
  true // allows deleting the green circle
);

specialCircle.addEventListener("click", (e) => {
  console.log("special:", e);
  specialCircle.style.backgroundColor = "green";
  e.stopPropagation();
});
