document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const userIdInput = document.getElementById("userId");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const errorMessageDiv = document.getElementById("error-message");
  const loaderOverlay = document.getElementById("loaderOverlay"); // Get the loader overlay

  // Function to show the loader
  function showLoader() {
    loaderOverlay.classList.add("show");
  }

  // Function to hide the loader
  function hideLoader() {
    loaderOverlay.classList.remove("show");
  }

  // Simulate login action (you'd replace this with real API call)
  async function handleLogin(e) {
    e.preventDefault();
    errorMessageDiv.textContent = "";
    const email = userIdInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      errorMessageDiv.textContent = "Please enter both Admin ID and Password.";
      return;
    }

    showLoader(); // Show the loader before starting the login process

    try {
      // Simulating successful login
      await fakeLogin(email, password);
      
      // Redirect after a delay, ensuring the loader is visible for a moment
      setTimeout(() => {
        hideLoader(); // Hide loader before redirecting
        window.location.href = "/Dashboard.html";
      }, 2000); // This 2-second delay is combined with fakeLogin's 0.5s, making it 2.5s total visible loader time if successful
    } catch (err) {
      hideLoader(); // Hide loader if login fails
      errorMessageDiv.textContent = err.message || "Invalid ID or password. Please try again.";
    }
  }

  // Fake login function - simulate backend response
  function fakeLogin(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "admin@example.com" && password === "password") {
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 500); // Simulate network delay for API call
    });
  }

  // Attach event listener
  form.addEventListener("submit", handleLogin);
});