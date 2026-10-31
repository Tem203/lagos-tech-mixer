/* =========================================================
   Lagos Tech Mixer — main script
   1. Mobile menu (hamburger)
   2. Live countdown
   3. Gallery lightbox
   ========================================================= */

/* ---------- 1. Mobile menu ---------- */
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  // aria-expanded tells screen readers whether the menu is open
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", function () {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

// Close the menu after a link is tapped, so the page is visible again
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

// Close the menu with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setMenu(false);
    menuButton.focus();
  }
});

/* ---------- 2. Countdown ----------
   +01:00 is West Africa Time (WAT), so the countdown is correct
   wherever in the world the visitor is. */
const EVENT_DATE = new Date("2026-12-12T10:00:00+01:00");
const countdown = document.querySelector("#countdown");
const numbers = {
  days: countdown.querySelector('[data-unit="days"]'),
  hours: countdown.querySelector('[data-unit="hours"]'),
  minutes: countdown.querySelector('[data-unit="minutes"]'),
  seconds: countdown.querySelector('[data-unit="seconds"]'),
};

// Adds a leading zero: 7 -> "07"
function pad(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const msLeft = EVENT_DATE - new Date();

  if (msLeft <= 0) {
    clearInterval(timer);
    countdown.innerHTML = '<p class="countdown__done">It\'s happening today. See you there!</p>';
    return;
  }

  const totalSeconds = Math.floor(msLeft / 1000);
  numbers.days.textContent = pad(Math.floor(totalSeconds / 86400));
  numbers.hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
  numbers.minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
  numbers.seconds.textContent = pad(totalSeconds % 60);
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // run once straight away so it doesn't show 00 for the first second

/* ---------- 3. Gallery lightbox ---------- */
const lightbox = document.querySelector("#lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__img");

document.querySelectorAll(".gallery__item").forEach(function (button) {
  button.addEventListener("click", function () {
    const img = button.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.showModal(); // built-in: opens the dialog, traps focus, Escape closes it
  });
});

lightbox.querySelector(".lightbox__close").addEventListener("click", function () {
  lightbox.close();
});

// Clicking the dark area around the photo also closes it
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
