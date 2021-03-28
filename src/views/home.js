import { html } from "//unpkg.com/lit-html?module";

import { getMovies } from "../api/data.js";



const homeTemplate = (data) => html`
  ${data.map(movieTemplate)}
`;

const movieTemplate = (data) => html`
  <section class="movies-sections">
    <img src=${data.i.imageUrl} alt="movi-img" />
    <p>${data.l}</p>
    <p>${data.y}</p>
  </section>
`;

export async function homePage(ctx) {
    const data = await getMovies();
    ctx.render(homeTemplate(data));

}
