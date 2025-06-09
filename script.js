function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.innerText = "Please fill in both fields.";
    message.style.color = "red";
    return;
  }

  // Demo login check
  if (email === "test@example.com" && password === "password123") {
    message.innerText = "Login successful!";
    message.style.color = "green";
  } else {
    message.innerText = "Invalid email or password.";
    message.style.color = "red";
  }
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}


