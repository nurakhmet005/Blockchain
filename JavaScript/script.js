let tabsButton = document.querySelectorAll(".tabs__header-nav-link");
let tabsItems = document.querySelectorAll(".industry__tab");

tabsButton.forEach(function (item) {
  item.addEventListener("click", () => {
    let currentBtn = item;
    let tabID = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabID);

    if (!currentBtn.classList.contains("active")) {
      tabsButton.forEach((item) => {
        item.classList.remove("active");
      });
      tabsItems.forEach((item) => {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
});

document.querySelector(".tabs__header-nav-link").click();

let burgerButton = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__nav");

burgerButton.addEventListener("click", () => {
  if (
    !burgerButton.classList.contains("active") &
    !headerNav.classList.contains("active")
  ) {
    burgerButton.classList.add("active");
    headerNav.classList.add("active");
  } else {
    burgerButton.classList.remove("active");
    headerNav.classList.remove("active");
  }
});
