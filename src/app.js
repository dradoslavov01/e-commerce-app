import page from '//unpkg.com/page/page.mjs';
import { render } from '//unpkg.com/lit-html?module';

import {homePage} from './views/home.js'

import * as api from './api/data.js'
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

window.api = api;

const main = document.querySelector('.container');

page('/', renderMiddlewear, homePage);
page('/movies', renderMiddlewear, homePage);
page('/login', renderMiddlewear, loginPage);
page('/register', renderMiddlewear, registerPage);

page.start();


function renderMiddlewear(ctx, next) {
	ctx.render = (content) => render(content, main);
	next();
}




