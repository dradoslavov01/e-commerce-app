import * as api from './api.js';
 
api.settings.userHost = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getItem() {
    return await api.get('https://fakestoreapi.com/products');
}