// attach copy-email behavior to every mail-button on the page
const emailButtons = document.querySelectorAll(".mail-button");

emailButtons.forEach((emailBtn) => {
  emailBtn.addEventListener("click", () => {
    const email = "gmicheloni52@gmail.com";
    navigator.clipboard.writeText(email);

    // look for a sibling element with the copy-msg class
    const msg = emailBtn.parentElement.querySelector(".copy-msg");
    if (msg) {
      msg.classList.add("show");
      setTimeout(() => {
        msg.classList.remove("show");
      }, 2000);
    }
  });
});

const checkbox = document.getElementById("checkbox");

function setLanguage(lang) {
  // update every CV link on the page
  document.querySelectorAll(".link-cv").forEach((anchor) => {
    anchor.href =
      lang === "en"
        ? "assets/cv/Gianfranco Micheloni – Full Stack Developer – CV.pdf"
        : "assets/cv/Gianfranco Micheloni - Programador Full Stack - CV.pdf";
  });

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

      // update all copy message spans since there may be two
      document.querySelectorAll(".copy-msg").forEach((span) => {
        span.textContent = translations.CopyMessage;
      });

      document.getElementById("JobRol").textContent = translations.JobRol;
      document.getElementById("JobDuration").textContent =
        translations.JobDuration;
      document.getElementById("JobDescription").textContent =
        translations.JobDescription;
      document.getElementById("projects").textContent = translations.Projects;
      document.getElementById("project-description").textContent =
        translations.ProjectDescription1;
      document.getElementById("education").textContent = translations.Education;
      document.getElementById("education-degree").textContent =
        translations.EducationTitle;
      document.getElementById("education-description").textContent =
        translations.EducationDescription;
      document.getElementById("education-duration").textContent =
        translations.EducationDuration;
      document.getElementById("education-degree2").textContent =
        translations.Education2Title;
      document.getElementById("education-description2").textContent =
        translations.Education2Description;
      document.getElementById("education-duration2").textContent =
        translations.Education2Duration;
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
