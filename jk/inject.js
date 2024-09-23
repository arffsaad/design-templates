$(document).ready(function () {
    // add favicon sendiri because why not
    document.querySelector("head > link:nth-child(17)").remove()
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = 'https://masjidclock.arfsd.cyou/design-templates/jk/favicon.ico';
    document.head.appendChild(link);

    // add own og:image hehe
    $('meta[property="og:title"]').attr('content', 'Walimatulurus Amanina & Ariff');
    $('meta[name="og:description"]').attr('content', 'Anda dijemput ke majlis kami! Sila tekan link untuk RSVP 🩵');
    $('meta[property="og:image"]').attr('content', 'https://masjidclock.arfsd.cyou/design-templates/jk/ogimage.jpg');

    $('meta[name="twitter:title"]').attr('content', 'Walimatulurus Amanina & Ariff');
    $('meta[name="twitter:description"]').attr('content', 'Anda dijemput ke majlis kami! Sila tekan link untuk RSVP 🩵');
    $('meta[name="twitter:image"]').attr('content', 'https://masjidclock.arfsd.cyou/design-templates/jk/ogimage.jpg');

    // shifting title
    var title = " Walimatulurus Amanina & Ariff - ";
    var titleLength = 20;

    setInterval(function () {
        title = title.substring(1) + title.charAt(0);
        document.title = title.substring(0, titleLength - 1);
    }, 300);

    // Rename salam kaut to Sumbangan Ikhlas
    const salamKautElement = document.querySelector('button[data-bs-target="#salam_modal"]');
    salamKautElement.innerHTML = '<i class="ti ti-cash position-absolute top-50 translate-middle-y f-25 start-20"></i><div>Sumbangan Ikhlas</div>';
    document.querySelector('#salam_modal > div.ekad-width > div > h5').innerHTML = 'Sumbangan Ikhlas <i class="ti ti-cash f-25"></i>';

    // Hide promo card
    document.querySelector("body > div.ekad-width.text-center > b > b > b > div.mt-4.px-1").style.display = 'none';
    document.querySelector("body > div.ekad-width.text-center > b > b > b > div:nth-child(2)").style.marginBottom = '9em';

    // Add custom rsvp groups
    const selectElement = $('#rsvp1_hubungan');
    selectElement.find('option:not(:first)').remove();
    const newOptions = ['Keluarga/Rakan Bapa Pengantin Perempuan', 'Keluarga/Rakan Ibu Pengantin Perempuan', 'Rakan Pengantin Perempuan', 'Keluarga Pengantin Lelaki'];

    newOptions.forEach(optionText => {
        selectElement.append(new Option(optionText, optionText));
    });

    // Add stripe payment for Credit/Debit.

    // manipulate DOM
    var stripeButton = `
        <button class="butang white mb-2 mt-3 py-3" data-bs-target="#stripe" data-bs-toggle="offcanvas">
    <i class="ti ti-credit-card-pay position-absolute top-50 translate-middle-y f-25 start-20"></i>
    <div><span class="label-salam-fpx f-12">Kredit/Debit/GrabPay (Stripe)</span></div>
</button>
    `;

    // Append the new button after the last button
    $('[data-bs-target="#fpx"]').after(stripeButton);

    var stripeModal = `
  <div class="offcanvas offcanvas-bottom" id="stripe">
      <div class="ekad-width">
          <div class="position-relative px-4 py-2">
              <div class="my-2">Kredit/Debit/GrabPay</div>
              <div class="text-end"><button type="button"
                      class="btn position-absolute translate-middle close-canvas border-secondary-subtle rounded border bg-white shadow-sm"
                      data-bs-target="#salam_modal" data-bs-toggle="offcanvas"><i
                          class="bi bi-caret-down-fill"></i></button></div>
          </div>
      </div>
      <div class="offcanvas-body bg-body-secondary p-4">
          <div class="ekad-width">
              <div class="nota fw-bold mt-2 rounded p-4">
                  <i class="bi bi-exclamation-triangle-fill"></i><br>
                  <span class="label-salam-note">Apple Pay dan Google Pay juga diterima.</span>
              </div>
              <div>
                  <div class="flex-column">
                      <a id="customstr" class="btn btn-light btn-flex fw rounded-pill mt-2 border"><span
                              class="f-12"></span><b>Jumlah Sendiri<b></b></b></a><b><b>
                      <a id="rm20str" class="btn btn-light btn-flex fw rounded-pill mt-2 border"><span
                              class="f-12">RM</span><b> 20<b></b></b></a><b><b>
                              <a id="rm50str" class="btn btn-light btn-flex fw rounded-pill mt-2 border"><span
                                      class="f-12">RM</span><b> 50<b></b></b></a><b><b>
                                      <a id="rm100str" class="btn btn-light btn-flex fw rounded-pill mt-2 border"><span
                                              class="f-12">RM</span><b> 100<b></b></b></a><b><b>
                                          </b></b></b></b></b></b>
                  </div><b><b><b>
                              <section class="mb-5 mt-4">
                                  <a class="pointer btn btn-outline-secondary rounded-pill fw-bold pb-2"
                                      data-bs-target="#salam_modal" data-bs-toggle="offcanvas"><i
                                          class="bi bi-x-circle-fill"></i> <span class="label-btn-batal">Batal</span></a>
                              </section>
                          </b></b></b>
              </div>
          </divdiv><b><b><b>
                  </b></b></b>
      </div><b><b><b>
              </b></b></b>
  </div>
`;

    $("#fpx").after(stripeModal);

    // DOM complete

    // scripting
    $("#rm20str").click(function () {
        $.get('https://stripe.arfsd.cyou/create/rm20')
            .done(function (data) {
                window.location.href = data;
            })
            .fail(function (xhr, status, error) {
                alert("Error: " + error);
            });
    });
    $("#rm50str").click(function () {
        $.get('https://stripe.arfsd.cyou/create/rm50')
            .done(function (data) {
                window.location.href = data;
            })
            .fail(function (xhr, status, error) {
                alert("Error: " + error);
            });
    });
    $("#rm100str").click(function () {
        $.get('https://stripe.arfsd.cyou/create/rm100')
            .done(function (data) {
                window.location.href = data;
            })
            .fail(function (xhr, status, error) {
                alert("Error: " + error);
            });
    });
    $("#customstr").click(function () {
        $.get('https://stripe.arfsd.cyou/create/free')
            .done(function (data) {
                window.location.href = data;
            })
            .fail(function (xhr, status, error) {
                alert("Error: " + error);
            });
    });

    // Callback modal
    if (window.location.hash == 'stripeSuccess') {
        document.querySelector("#gate > div > div > div.animate__animated.animate__fadeInUp.animate__slow.d-05s.mt-4 > button").click()
        alert('Payment Success!')
    }
    // scripting complete
});
