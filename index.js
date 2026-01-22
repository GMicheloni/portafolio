const emailBtn = document.getElementById("copy-email");
const msg = document.getElementById("copy-msg");

emailBtn.addEventListener("click", () => {
  const email = "gmicheloni52@gmail.com";

  navigator.clipboard.writeText(email);

  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
  }, 2000);
});

const checkbox = document.getElementById("checkbox");

function setLanguage(lang) {
  fetch(`i18n/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      document.getElementById("rol").textContent = translations.rol;
      document.getElementById("about-me").textContent = translations.aboutMe;
      document.getElementById("about-me-text").textContent =
        translations.aboutMeText;
      document.getElementById("technologies").textContent =
        translations.Technologies;
      document.getElementById("experience").textContent =
        translations.Experience;
      document.getElementById("copy-msg").textContent =
        translations.CopyMessage;
      document.getElementById("JobRol").textContent = translations.JobRol;
      document.getElementById("JobDuration").textContent =
        translations.JobDuration;
      document.getElementById("JobDescription").textContent =
        translations.JobDescription;
    });
}

const userLang = navigator.language || navigator.userLanguage;
const initialLang = userLang.startsWith("es") ? "es" : "en";

checkbox.checked = initialLang === "en";

setLanguage(initialLang);

checkbox.addEventListener("change", () => {
  const selectedLang = checkbox.checked ? "en" : "es";
  setLanguage(selectedLang);
});
