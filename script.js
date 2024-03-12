const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

//   Price TAB
document.addEventListener("DOMContentLoaded", function () {
  // Function to show/hide tabs
  window.showTab = function (tabId, tabButton) {
    // Hide all tabs
    const allTabs = document.querySelectorAll(".tab-content");
    allTabs.forEach((tab) => {
      tab.style.display = "none";
    });

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = "block";

      // Remove 'active' class from all tab buttons
      const allTabButtons = document.querySelectorAll(".price-box");
      allTabButtons.forEach((button) => {
        button.classList.remove("active");
      });

      // Add 'active' class to the clicked tab button
      tabButton.classList.add("active");
    }
  };
});
