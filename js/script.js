document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MODAL GALLERY  ---
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imgFull");
  const closeBtn = document.querySelector(".close-modal");

  const galleryWrappers = document.querySelectorAll(".img-wrapper");

  if (modal) {
    galleryWrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", () => {
        const imgElement = wrapper.querySelector("img");
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == modal) modal.style.display = "none";
    });
  }

  // --- 2. BLOG EXPAND/COLLAPSE ---
  const blogBtns = document.querySelectorAll(".read-more-btn");
  blogBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.previousElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        btn.textContent = "Baca Selengkapnya";
      } else {
        content.style.display = "block";
        btn.textContent = "Tutup Artikel";
      }
    });
  });

  // --- 3. CONTACT FORM VALIDATION ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("pesan").value;

      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Mohon isi semua bidang yang tersedia.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Mohon masukkan format email yang valid.");
        return;
      }

      alert(`Terima kasih, ${name}! Pesan Anda telah terkirim (simulasi).`);
      contactForm.reset();
    });
  }

  // --- 4. NAVBAR ACTIVE STATE ---
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll(".nav-links a");
  menuItems.forEach((item) => {
    if (item.href === currentLocation) {
      item.classList.add("active");
    }
  });
});

// --- 5. MOBILE MENU TOGGLE ---
const mobileMenu = document.getElementById("mobile-menu");
const navLinksList = document.querySelector(".nav-links");

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    navLinksList.classList.toggle("active");

    mobileMenu.classList.toggle("is-active");
  });
}
