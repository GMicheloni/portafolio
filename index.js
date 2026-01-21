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
