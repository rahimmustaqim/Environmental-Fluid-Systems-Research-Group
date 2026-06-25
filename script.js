const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});

/* =========================
   BUSINESS SCOPE MODAL
========================= */

function openScopeModal(pageUrl, title) {
  const modal = document.getElementById("scopeModal");
  const frame = document.getElementById("scopeFrame");
  const modalTitle = document.getElementById("scopeModalTitle");

  if (!modal || !frame || !modalTitle) return;

  modalTitle.textContent = title;
  frame.src = pageUrl;

  modal.classList.add("active");
  document.body.classList.add("scope-modal-open");
}

function closeScopeModal() {
  const modal = document.getElementById("scopeModal");
  const frame = document.getElementById("scopeFrame");

  if (!modal || !frame) return;

  modal.classList.remove("active");
  document.body.classList.remove("scope-modal-open");

  setTimeout(() => {
    frame.src = "";
  }, 250);
}

function printScopeContent() {
  const frame = document.getElementById("scopeFrame");

  if (!frame || !frame.contentWindow) return;

  frame.contentWindow.focus();
  frame.contentWindow.print();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeScopeModal();
  }
});
