function toggleListItemName() {
  const listItem = document.querySelectorAll("li")[2];

  if (!listItem) return;

  const updateName = () => {
    if (window.innerWidth <= 786) {
      listItem.textContent = "Maszyny";
    } else {
      listItem.textContent = "Park Maszynowy";
    }
  };

  updateName();

  window.addEventListener("resize", updateName);
}

window.addEventListener("DOMContentLoaded", toggleListItemName);
