function formValidation() {
  const btnSubmit = document.getElementById("btnSubmit");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const emailErrorLabel = document.getElementById("error_email");
  const interestedField = document.getElementById("interested");

  const regEmail = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  );

  if (emailField.value && !regEmail.test(emailField.value)) {
    emailField.style = "border: 1px solid red";
    emailErrorLabel.style = "display:block; color:red; font-size:12px;";
    emailErrorLabel.textContent = "Email tidak valid";
  } else {
    emailField.style = "border: none";
    emailErrorLabel.style = "display:none";
  }

  if (nameField.value && emailField.value && interestedField.value) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

function submit() {
  Toastify({
    text: "Data anda telah disubmit, sales kami akan menghubungi anda. Terima kasih",
    duration: 1000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  setTimeout(() => (window.location.href = "/"), 1000);
}
