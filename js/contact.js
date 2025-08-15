const myForm = document.querySelector("form");
const sub = document.querySelector(".sendus");
const myName = document.querySelector(".myname");
const myEmail = document.querySelector(".myemail");
const mySubject = document.querySelector(".mysub");
const textArea = document.querySelector(".textarea");
const feedback = document.querySelector(".form-feedback");
function showMessage(msg, color) {
  feedback.textContent = msg;
  feedback.style.color = "white";
  feedback.style.backgroundColor = color;
  feedback.style.padding = "8px";
  feedback.style.borderRadius = "6px";

  setTimeout(() => {
    feedback.textContent = "";
    feedback.style.backgroundColor = "transparent";
  }, 3000);
}
function check() {
  if (
    myName.value.trim() === "" ||
    myEmail.value.trim() === "" ||
    textArea.value.trim() === "" ||
    mySubject.value.trim() === ""
  ) {
    showMessage("fill the form", "blue");
    return false;
  }
  return true;
}
sub.addEventListener("click", function (event) {
  event.preventDefault();
  if (!check()) return;
  if (!myEmail.value.includes("@")) {
    showMessage("enter a valid email", "darkBlue");
    return;
  }
  sub.textContent = "Sent";
  myForm.reset();

  setTimeout(() => {
    sub.textContent = "Send message";
  }, 3000);
});
