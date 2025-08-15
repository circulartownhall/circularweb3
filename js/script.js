var submit = document.querySelector(".sub");
var emailInput = document.querySelector("input[type='email']");
var message = document.getElementById("Feedback");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    showFeedback("Please enter a valid email", "red");
    return;
  }
  showFeedback("Thanks for subscribing!", "#198754");
  emailInput.value = "";
});
emailInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  }
});

function showFeedback(msgtext, bgColor) {
  message.textContent = msgtext;
  message.style.backgroundColor = bgColor || "#198754";
  message.classList.add("show");

  setTimeout(function () {
    message.classList.remove("show");
  }, 3000);
}
