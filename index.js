"strict mode";
const btns = document.querySelectorAll(".btn");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const submit = document.querySelector(".submit");
const showRatings = document.querySelector(".rating");
let arr = [];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove("selectedbtn");
      btns[i].classList.add("selectedbtn");
    }
    console.log(btns[i].outerText);
    arr.push(btns[i].outerText);
  });
}

submit.addEventListener("click", function () {
  box1.classList.add("hidden");
  box2.classList.remove("hidden");
  showRatings.outerHTML = arr[arr.length - 1] + " ";
});
