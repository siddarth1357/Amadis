document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
  });
});
