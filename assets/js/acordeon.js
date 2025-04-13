let collapses = document.querySelectorAll(".acordeon_collapse");

collapses.forEach((collapse) => {
  let header = collapse.querySelector(".collapse_header");
  header.addEventListener("click", () => {
    collapse.classList.toggle("acordeon_collapse-open");
  });
});
