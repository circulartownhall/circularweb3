var formSubmit = document.querySelector(".js-submit");
var form = document.querySelector("form");
var namein = document.getElementById("name");
var email = document.getElementById("email");
var interest = document.getElementById("interest");
var message = document.getElementById("message");
var displayme = document.querySelector(".hiddenmessage");
function check() {
  if (
    namein.value.trim() === "" ||
    email.value.trim() === "" ||
    interest.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    displayme.textContent = "fill all fields";
    displayme.style.color = "red";
    displayme.classList.remove("hiddenmessage");
    return false;
  }
  return true;
}
formSubmit.addEventListener("click", function () {
  const isValid = check();
  if (!isValid) return;
  displayme.textContent = "form submitted";
  displayme.style.color = "green";
  displayme.classList.remove("hiddenmessage");
  formSubmit.textContent = "Submitted";
  form.reset();
  setTimeout(function () {
    formSubmit.textContent = "Submit Application";
  }, 3000);
});
