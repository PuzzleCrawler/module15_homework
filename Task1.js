const toggleIcon = document.getElementById("toggle-icon");
const icon = document.getElementById("icon");

toggleIcon.addEventListener("click", function() {
  if (icon.src.includes("Assets/arrow-down-left-circle.svg")) {
    icon.src = "Assets/arrow-down-left-circle-fill.svg";
  } else {
    icon.src = "Assets/arrow-down-left-circle.svg";
  }
});
