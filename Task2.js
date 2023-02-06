const button = document.getElementById("display-screen-size");

button.addEventListener("click", function() {
  const width = window.screen.width;
  const height = window.screen.height;
  alert(`The screen size is ${width} x ${height}.`);
});
