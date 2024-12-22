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

const darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
    if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener("change", function () {
            resetTheme();
        });
    }
});

function initTheme() {
    let darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "dark";
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected
        ? document.documentElement.setAttribute('data-bs-theme', 'dark')
    : document.documentElement.removeAttribute("data-bs-theme");
}

function resetTheme() {
    if (darkSwitch.checked) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
    } else {
        document.documentElement.removeAttribute("data-bs-theme");
        localStorage.removeItem("darkSwitch");
    }
}

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
});

