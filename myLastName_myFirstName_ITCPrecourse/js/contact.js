const myForm = document.getElementById("my-form");
const submitBtn = document.getElementById("submit-btn");

myForm.addEventListener("input", function () {
  if (myForm.checkValidity()) {
    // Enable the submit button
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
