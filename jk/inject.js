// add favicon sendiri because why not
document.querySelector("head > link:nth-child(17)").remove()
var link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'https://masjidclock.arfsd.cyou/design-templates/jk/favicon.ico';
document.head.appendChild(link);

// add own og:image hehe
$('meta[property="og:title"]').attr('content', 'Walimatulurus Amanina & Ariff');
$('meta[property="og:description"]').attr('content', 'Anda dijemput ke majlis kami! Sila tekan link untuk RSVP 🩵');
$('meta[property="og:image"]').attr('content', 'https://masjidclock.arfsd.cyou/design-templates/jk/ogimage.jpg');

$('meta[property="twitter:title"]').attr('content', 'Walimatulurus Amanina & Ariff');
$('meta[property="twitter:description"]').attr('content', 'Anda dijemput ke majlis kami! Sila tekan link untuk RSVP 🩵');
$('meta[property="twitter:image"]').attr('content', 'https://masjidclock.arfsd.cyou/design-templates/jk/ogimage.jpg');

$(document).ready(function() {
    // Rename salam kaut to Sumbangan Ikhlas
    const salamKautElement = document.querySelector('button[data-bs-target="#salam_modal"]');
    salamKautElement.innerHTML = '<i class="ti ti-cash position-absolute top-50 translate-middle-y f-25 start-20"></i><div>Sumbangan Ikhlas</div>';
    document.querySelector('#salam_modal > div.ekad-width > div > h5').innerHTML = 'Sumbangan Ikhlas <i class="ti ti-cash f-25"></i>';
    
    // Hide promo card
    document.querySelector("body > div.ekad-width.text-center > b > b > b > div.mt-4.px-1").style.display = 'none';
    document.querySelector("body > div.ekad-width.text-center > b > b > b > div:nth-child(2)").style.marginBottom = '9em';

    // 1. Select the <select> element
    const selectElement = $('#rsvp1_hubungan');

    // 2. Remove all options except the first one (default selected)
    selectElement.find('option:not(:first)').remove();

    // 3. Add new options
    const newOptions = ['Keluarga/Rakan Bapa Pengantin Perempuan', 'Keluarga/Rakan Ibu Pengantin Perempuan', 'Rakan Pengantin Perempuan', 'Keluarga Pengantin Lelaki'];

    newOptions.forEach(optionText => {
        selectElement.append(new Option(optionText, optionText)); // Append new options
    });
});
