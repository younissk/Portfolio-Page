const background_project = document.getElementById("project-preview");

const project_links = [
  "https://preview.p5js.org/Youniss/present/9ZHeqNZ0j",
  "https://younissk.github.io/p5-projects/Self%20avoiding%20walk/index.html",
  "https://preview.p5js.org/Youniss/present/csa3k0oP4",
  "https://younissk.github.io/p5-projects/Bezier/index.html",
  "https://younissk.github.io/p5-projects/Maurer%20curve/index.html",
  "https://younissk.github.io/p5-projects/Mandelbrot/index.html",
  "https://younissk.github.io/p5-projects/Occilation/index.html",
  "https://younissk.github.io/p5-projects/Snowflake/index.html",
];

let i = 0;
background_project.src = project_links[i];
i++;

setInterval(() => {
  if (i < project_links.length) {
    background_project.src = project_links[i];
    i++;
  } else {
    i = 0;
  }
}, 7000);
