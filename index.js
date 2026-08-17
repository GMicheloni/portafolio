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

const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselDots = document.querySelectorAll(".carousel-dot");
const carouselPrev = document.querySelector(".carousel-button.prev");
const carouselNext = document.querySelector(".carousel-button.next");

let currentSlide = 0;

function updateCarousel() {
  if (!carouselTrack || !carouselSlides.length) {
    return;
  }

  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  carouselSlides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === currentSlide);
  });

  carouselDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = (index + carouselSlides.length) % carouselSlides.length;
  updateCarousel();
}

if (carouselPrev && carouselNext && carouselSlides.length) {
  carouselPrev.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
  });

  carouselNext.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
  });

  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  updateCarousel();
}

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
      document.getElementById("JobRol3").textContent = translations.JobRol3;
      document.getElementById("JobDuration3").textContent =
        translations.JobDuration3;
      document.getElementById("JobDescription3").textContent =
        translations.JobDescription3;
      document.getElementById("JobRol2").textContent = translations.JobRol2;
      document.getElementById("JobDuration2").textContent =
        translations.JobDuration2;
      document.getElementById("JobDescription2").textContent =
        translations.JobDescription2;
      document.querySelectorAll(".job-link-text").forEach((span) => {
        span.textContent = translations.JobLinkLabel;
      });
      document.getElementById("projects").textContent = translations.Projects;
      document.getElementById("project-name").textContent =
        translations.ProjectTitle;
      document.getElementById("project-description").textContent =
        translations.ProjectDescription1;
      document.getElementById("project-name-2").textContent =
        translations.ProjectTitle2;
      document.getElementById("project-description-2").textContent =
        translations.ProjectDescription2;
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
