const response = await fetch('https://fakestoreapi.com/products/1');
const data = await response.json();
console.log(data);

const ele = document.createElement('div');
ele.textContent = data.price;
const main = document.querySelector('.container');
main.appendChild(ele)