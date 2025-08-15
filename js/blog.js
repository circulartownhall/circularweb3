const fill = document.querySelector(".form");
const comm = document.querySelector(".comment-sec");
const messBox = document.querySelector(".form-mess");
fill.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = fill.querySelector("input[type='text']").value.trim();
  const comment = fill.querySelector("textarea").value.trim();

  if (userName === "" || comment === "") {
    showMessage("complete the fields", "red");
    return;
  }

  const now = new Date().toLocaleString();

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  commentBox.innerHTML = `
    <h4>${userName}</h4>
    <p>${comment}</p>
    <small style="color: gray;">Posted on ${now}</small>
    <hr>
    `;
  comm.prepend(commentBox);
  fill.reset();
  showMessage("comment posted sucessfully!", "green");
});
function showMessage(msg, color) {
  messBox.textContent = msg;
  messBox.style.color = "white";
  messBox.style.backgroundColor = color;
  messBox.style.padding = "10px";
  messBox.style.marginTop = "10px";
  messBox.style.borderRadius = "5px";

  setTimeout(() => {
    messBox.textContent = "";
    messBox.style.backgroundColor = "transparent";
  }, 3000);
}
