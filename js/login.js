document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;
  console.log(userEmail, userPassword);

  if (userEmail === "shakil@gmail.com" && userPassword === "shakil") {
    window.location.href = "banking.html";
  }
});
