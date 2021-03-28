import { html } from "//unpkg.com/lit-html?module";

import { login } from "../api/data.js";

const loginTemplate = () => html`
  <div class="container-login">
    <i class="fa fa-user-circle asd" aria-hidden="true"></i>
    <h1>Login</h1>
    <form>
      <i class="fa fa-user a" aria-hidden="true"></i>
      <input type="text" class="text" placeholder="Username" /><br />
      <i class="fa fa-lock a" aria-hidden="true"></i>
      <input type="password" class="pass" placeholder="Password" /><br />
      <button type="submit" class="btn">Login</button>
    </form>

    <p>
      Don't have an account <a href="/register">Register</a> here.
    </p>
  </div>
`;

export async function loginPage(ctx) {
  ctx.render(loginTemplate());
}
