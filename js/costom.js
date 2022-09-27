const toggle = document.querySelector("#toggle");
const show = document.querySelector("#show");

toggle.addEventListener("click", () => {
  show.className === "d-none"
    ? (show.className = "responsive")
    : (show.className = "d-none");
});
