function toggleListItemName() {
  const listItem = document.querySelectorAll("li")[2];

  if (!listItem) return;

  const updateName = () => {
    if (window.innerWidth <= 786) {
      listItem.innerHTML = '<a href="#">Maszyny</a>';
    } else {
      listItem.innerHTML = '<a href="#">Park Maszynowy</a>';
    }
  };

  updateName();

  window.addEventListener("resize", updateName);
}

window.addEventListener("DOMContentLoaded", toggleListItemName);
