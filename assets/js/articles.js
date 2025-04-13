let articulos = document.querySelector(".layout_articles");

let posts = [
  {
    title: "Articulo 1",
    date: "23/02/2025",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates repellendus culpa corrupti ad minus dolor commodi eius.  Amet at animi laborum placeat aspernatur nihil nobis quaerat impedit, itaque asperiores.",
  },
  {
    title: "Articulo 2",
    date: "30/12/2025",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates repellendus culpa corrupti ad minus dolor commodi eius.  Amet at animi laborum placeat aspernatur nihil nobis quaerat impedit, itaque asperiores.",
  },
  {
    title: "Articulo 3",
    date: "10/12/2025",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates repellendus culpa corrupti ad minus dolor commodi eius.  Amet at animi laborum placeat aspernatur nihil nobis quaerat impedit, itaque asperiores.",
  },
  {
    title: "Articulo 4",
    date: "01/01/2027",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates repellendus culpa corrupti ad minus dolor commodi eius.  Amet at animi laborum placeat aspernatur nihil nobis quaerat impedit, itaque asperiores.",
  },
];

posts.forEach((article) => {
  articulos.innerHTML += `<article class="articles_article">
          <h3 class="article_title">${article.title}</h3>
          <span class="article_date">${article.date}</span>
          <p class="article_body">
          ${article.body}
          </p>
          <a href="" class="article_btn">Leer Mas</a>
        </article>   
    `;
});
