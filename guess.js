let checkBtn = document.querySelector("#check");
let input = document.getElementById("enter");
checkBtn.addEventListener("click", () => {
  const numb = 72;
  const usernum = parseInt(input.value);
  if (isNaN(usernum)) {
    alert("Enter valid input😬");
  } else if (usernum !== numb) {
    alert("Thappu😂  guess again!!");
  } else {
    alert("Woooh!! CORRECT 🤩");
  }
});
    
