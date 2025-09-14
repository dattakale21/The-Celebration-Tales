
const menuBtn = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});

// Optional: close menu when clicking a link
function closeMenu() {
  mobileMenu.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");
  const categoryGallery = document.getElementById("categoryGallery");
  const categoryCardsDiv = document.getElementById("categoryCards");
  const galleryTitle = document.getElementById("galleryTitle");
  const galleryImages = document.getElementById("galleryImages");
  const filterButtons = document.querySelectorAll(".filter-btn");


  function loadGallery(category, push = true) {
    galleryTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1) + " Gallery";
    galleryImages.innerHTML = "";

    imagesData[category].forEach((img) => {
      galleryImages.innerHTML += `
        <div class="gallery-item">
          <img src="${img}" class="w-full object-contain rounded-lg shadow-md cursor-pointer">
        </div>`;
    });

    categoryCardsDiv.classList.add("hidden");
    categoryGallery.classList.remove("hidden");

   
    if (push) history.pushState({ category }, "", `#${category}`);
  }
// function setActiveButton(category) {
//   filterButtons.forEach(b => {
//     b.classList.remove("bg-cyan-600", "text-white");
//     b.classList.add("bg-gray-200", "text-black");
//   });

//   const activeBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
//   if (activeBtn) {
//     activeBtn.classList.remove("bg-gray-200", "text-black");
//     activeBtn.classList.add("bg-cyan-600", "text-white");
//   }
// }

  // filterButtons.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     const category = btn.dataset.category;
  //     if (category === "all") {
  //       categoryGallery.classList.add("hidden");
  //       categoryCardsDiv.classList.remove("hidden");
  //     } else {
  //       loadGallery(category);
  //     }
  //     setActiveButton(category);
  //   });
  // });

  // categoryCards.forEach((card) => {
  //   card.addEventListener("click", () => {
  //     loadGallery(card.dataset.category);
  //     setActiveButton(card.dataset.category);
  //   });
  // });

// Handle browser back/forward
// window.addEventListener("popstate", (event) => {
//   if (event.state && event.state.category) {
//     loadGallery(event.state.category, false);
//     setActiveButton(event.state.category);  // reset and highlight correct one
//   } else {
//     categoryGallery.classList.add("hidden");
//     categoryCardsDiv.classList.remove("hidden");
//     setActiveButton("all"); // reset everything back to "All"
//   }
// });


