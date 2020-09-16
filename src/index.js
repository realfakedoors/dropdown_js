function showDropdown(button_index) {
  document.getElementById(`dropdown-${button_index}`).classList.add("show");
}

function hideDropdown(button_index) {
  document.getElementById(`dropdown-${button_index}`).classList.remove("show");
}

for (let i = 0; i < 5; i++) {
  btn = document.getElementById(`navbar-item-${i}`);
  btn.addEventListener("mouseover", function () {
    showDropdown(i);
  });
  btn.addEventListener("mouseout", function () {
    hideDropdown(i);
  });
}
