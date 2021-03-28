import { html } from "//unpkg.com/lit-html?module";

import { register } from "../api/data.js";

const regiseterTemplate = () => html`
  <div class="container-register">
    <i class="fa fa-user-circle user" aria-hidden="true"></i>
    <h1>Register</h1>
    <form>
    <i class="fa fa-user" aria-hidden="true"></i>
      <input
        type="text"
        name="text"
        placeholder="Username"
        autocomplete="off"
      /><br />

      <i class="fa fa-envelope" aria-hidden="true"></i>
      <input
        type="text"
        name="text"
        placeholder="E-mail"
        autocomplete="off"
      /><br />

      <i class="fa fa-lock" aria-hidden="true"></i>
      <input
        type="password"
        name="pass"
        placeholder="Password"
        autocomplete="off"
      /><br />

      <i class="fa fa-lock" aria-hidden="true"></i>
      <input
        type="password"
        name="pass"
        placeholder="Repeat password"
        autocomplete="off"
      /><br />

      <button type="submit" name="btn">Register</button>
    </form>
    <p>Have already account? <a href="/login">Login</a> here.</p>
  </div>
`;

export async function registerPage(ctx) {
  ctx.render(regiseterTemplate());
}
