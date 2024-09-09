const salamKautElement = document.querySelector('button[data-bs-target="#salam_modal"]');
salamKautElement.innerHTML = '<i class="ti ti-cash position-absolute top-50 translate-middle-y f-25 start-20"></i><div>Sumbangan Ikhlas</div>';
document.querySelector('#salam_modal > div.ekad-width > div > h5').innerHTML = 'Sumbangan Ikhlas <i class="ti ti-cash f-25"></i>';
document.querySelector("body > div.ekad-width.text-center > b > b > b > div.mt-4.px-1").style.display = 'none';
document.querySelector("body > div.ekad-width.text-center > b > b > b > div:nth-child(2)").style.marginBottom = '9em';
document.querySelector("head > link:nth-child(17)").remove()
var link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'https://masjidclock.arfsd.cyou/design-templates/jk/favicon.ico';
document.head.appendChild(link);
