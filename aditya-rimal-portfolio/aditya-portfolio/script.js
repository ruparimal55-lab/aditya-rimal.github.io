const button = document.getElementById("theme");

button.addEventListener("click", () => {
  document.body.classList.toggle("light");

  button.textContent =
    document.body.classList.contains("light")
      ? "☀"
      : "☾";
});
