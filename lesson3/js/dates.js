const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;

const date = new Date();
let year = date.getFullYear();

const current_year = document.querySelector('#current_year');

current_year.innerHTML = `&copy; ${year} .:|:. Lexi G. Carver .:|:. Idaho`