/* ================= NAVBAR RENDER ================= */

document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector("#navbar");

  navbar.innerHTML = `
  <header class="header">

    <div class="header-middle">
      <div class="header-container">

        <div class="logo">
          <a href="index.html"><p>SHAKSHI'S BOUTIQUE</p></a>
        </div>

        <div class="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="social-icons-wrapper">
          <a href="https://wa.me/9112121212"><img src="./assets/images/whatsapp.svg"></a>
          <a href="https://www.instagram.com/"><img src="./assets/images/instagram-line.svg"></a>
          <a href="https://www.facebook.com/"><img src="./assets/images/facebook-circle-line.svg"></a>
        </div>

      </div>
    </div>

    <nav class="nav1" id="mainNav">
      <ul class="nav-links">
        <li><a href="Collection.html">SHOP</a></li>
        <li><a href="new-arrivels.html">NEW ARRIVAL’S</a></li>
        <li><a href="women_collection.html">ETHNIC WEAR</a></li>
        <li><a href="mother_daughter_collection.html">MOTHER & Daughter</a></li>
        <li><a href="shakshi_edition.html">SHAKSHI’S EDITION</a></li>
        <li><a href="aboutus.html">ABOUT US</a></li>
      </ul>

      <div class="nav-icons">
        <img src="./assets/images/contacts-line.svg" />
        <img src="./assets/images/search-line.svg" />
        <img src="./assets/images/heart-fill.svg" />
        <img src="./assets/images/shopping-cart-2-fill.svg" />
      </div>
    </nav>

  </header>
  `;


  /* ===== AFTER HTML EXISTS ===== */
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  /* TOGGLE */
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    toggle.classList.toggle("open");
  });

  /* CLOSE WHEN CLICK LINK */
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("open");
    });
  });

  /* CLOSE WHEN CLICK OUTSIDE */
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
      toggle.classList.remove("open");
    }
  });

  /* CLOSE ON DESKTOP RESIZE */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      nav.classList.remove("active");
      toggle.classList.remove("open");
    }
  });

});