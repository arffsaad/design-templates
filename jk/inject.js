if (!(window.location.href).includes('yangarifftentangnina.com')) {
    window.location.replace("https://forever.yangarifftentangnina.com")
}
$(document).ready(function () {
    const headURL = "https://forever.yangarifftentangnina.com";
    // add favicon sendiri because why not
    // document.querySelector("head > link:nth-child(17)").remove()
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = 'https://masjidclock.arfsd.cyou/design-templates/jk/favicon.ico';
    document.head.appendChild(link);

    // Change all script src attributes
    if (!(window.location.href).startsWith('https://ekaddigital.com')) {
        $('script[src^="https://ekaddigital.com"]').each(function() {
            $(this).attr('src', $(this).attr('src').replace('https://ekaddigital.com', ''));
        });

        $('form').each(function() {
            var currentAction = $(this).attr('action');
            if (currentAction && currentAction.startsWith('https://ekaddigital.com')) {
                $(this).attr('action', currentAction.replace('https://ekaddigital.com', ''));
            }
        });
    }

    // change font for guestbook
    $('.text_tulisan').css({'font-family': 'Noto Serif'})

    // custom max pax setup
    maxInputs = null
    if (maxInputs == null) {
        let hash = window.location.hash;
        try {
            let hashValue = hash.substring(1) ?? 0;
            var mappingMaxPaxCodes = {
                "4293026" : 6,
                "1123114" : 4,
                "8242543" : 3,
                "1549135" : 2,
                "1945384" : 1
            }
            maxInputs = mappingMaxPaxCodes[hashValue] ?? 0;
        } catch(e) {
            $('[data-bs-target="#rsvp_majlis_1"').removeClass('black')
            $('[data-bs-target="#rsvp_majlis_1"').css('opacity', '30%')
        }    
    }

    if (maxInputs == 0) {
        var elementRSVP = $('[data-bs-target="#rsvp_majlis_1"')
        elementRSVP.removeClass('black')
        elementRSVP.css('opacity', '30%')
        elementRSVP.removeAttr('data-bs-toggle')
        elementRSVP.removeAttr('data-bs-target')
        elementRSVP.on('click', function () {
            Swal.fire({
                position: "center",
                icon: "error",
                html:
                    "<div class='fw-bolder'>RSVP Tidak Dibuka.<br>Sila tekan semula link yang diberikan oleh pihak pengantin kepada anda.</div>",
                showConfirmButton: true,
                customClass: {
                    confirmButton: "butang black px-5 py-2 rounded-pill",
                }
            })
        })
    }

    // add own og:image hehe
    // $('meta[property="og:title"]').attr('content', 'Walimatulurus Amanina & Ariff');
    // $('meta[name="og:description"]').attr('content', 'Anda dijemput ke majlis kami! Sila tekan link untuk RSVP 🩵');
    // $('meta[property="og:image"]').attr('content', 'https://masjidclock.arfsd.cyou/design-templates/jk/ogimage.jpg');

    // $('meta[name="twitter:title"]').attr('content', 'Walimatulurus Amanina & Ariff');
    // $('meta[name="twitter:description"]').attr('content', 'Anda dijemput ke majlis kami! Sila tekan link untuk RSVP 🩵');
    // $('meta[name="twitter:image"]').attr('content', 'https://masjidclock.arfsd.cyou/design-templates/jk/ogimage.jpg');

    // shifting title
    // var title = " Walimatulurus Amanina & Ariff - ";
    // var titleLength = 20;

    // setInterval(function () {
    //     title = title.substring(1) + title.charAt(0);
    //     document.title = title.substring(0, titleLength - 1);
    // }, 300);

    // Rename salam kaut to Sumbangan Ikhlas
    const salamKautElement = document.querySelector('button[data-bs-target="#salam_modal"]');
    salamKautElement.innerHTML = '<i class="ti ti-cash position-absolute top-50 translate-middle-y f-25 start-20"></i><div>Salam Kaut Digital</div>';
    document.querySelector('#salam_modal > div.ekad-width > div > h5').innerHTML = 'Sumbangan Ikhlas <i class="ti ti-cash f-25"></i>';
    
    // rearrange card
    var sumbanganCard = $('#salam_modal').parent();
    var carousellCard = $('.gambar-swiper').parent().parent().parent().parent();
    $('#rsvp').after(sumbanganCard)
    $('#rsvp').before(carousellCard)
    

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
    <div><span class="label-salam-fpx f-12">GrabPay, Apple Pay, Debit/Credit</span></div>
</button>
    `;

    // Append the new button after the last button
    $('#copy_no_acc').before(stripeButton);
    
    var stripeModal = `
    <div class="offcanvas offcanvas-bottom" id="stripe">
    <div class="ekad-width">
        <div class="position-relative px-4 py-2">
            <div class="my-2">GrabPay, Apple Pay, Debit/Credit</div>
            <div class="text-end">
                <button type="button"
                    class="btn position-absolute translate-middle close-canvas border-secondary-subtle rounded border bg-white shadow-sm"
                    data-bs-target="#salam_modal" data-bs-toggle="offcanvas">
                        <i class="bi bi-caret-down-fill"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="offcanvas-body bg-body-secondary p-4">
        <div class="ekad-width">
            <div class="nota fw-bold mt-2 rounded p-4">
                <i class="bi bi-exclamation-triangle-fill"></i><br>
                <span class="label-salam-note">Apple Pay dan Google Pay juga diterima.<br>Sila tunggu seketika untuk butang Apple/Google Pay untuk muncul.</span>
            </div>
            <div>
                <div class="flex-column">
                    <a id="customstr" class="btn btn-light btn-flex fw rounded-pill mt-2 border">
                        <b>Jumlah Sendiri</b>
                    </a>
                    <a id="rm10str" class="btn btn-light btn-flex fw rounded-pill mt-2 border">
                        <span class="f-12">RM</span><b> 10</b>
                    </a>
                    <a id="rm20str" class="btn btn-light btn-flex fw rounded-pill mt-2 border">
                        <span class="f-12">RM</span><b> 20</b>
                    </a>
                    <a id="rm50str" class="btn btn-light btn-flex fw rounded-pill mt-2 border">
                        <span class="f-12">RM</span><b> 50</b>
                    </a>
                    <a id="rm100str" class="btn btn-light btn-flex fw rounded-pill mt-2 border">
                        <span class="f-12">RM</span><b> 100</b>
                    </a>
                </div>
                <section class="mb-5 mt-4">
                    <a class="pointer btn btn-outline-secondary rounded-pill fw-bold pb-2" data-bs-target="#salam_modal" data-bs-toggle="offcanvas">
                        <i class="bi bi-x-circle-fill"></i> 
                        <span class="label-btn-batal">Batal</span>
                    </a>
                </section>
            </div>
        </div>
    </div>
</div>
  <div class="offcanvas offcanvas-bottom" id="stripeThanks">
    <div class="ekad-width">
        <div class="position-relative px-4 py-2">
            <div class="my-2">Terima Kasih!</div>
            <div class="text-end">
                <button type="button"
                    class="btn position-absolute translate-middle close-canvas border-secondary-subtle rounded border bg-white shadow-sm"
                    data-bs-dismiss="offcanvas">
                        <i class="bi bi-caret-down-fill"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="offcanvas-body bg-body-secondary p-4">
        <div class="ekad-width">
            <div class="nota fw-bold mt-2 rounded p-4">
                <i class="bi bi-emoji-laughing-fill"></i><br>
                <span class="label-salam-note">Terima kasih atas sumbangan anda. Moga kita dapat bertemu pada majlis nanti!</span>
            </div>
        </div>
    </div>
</div>
  <script>
  function listen(sessID) {
        var listenerIframe = '<iframe id="stripeListener" src="https://stripe.arfsd.cyou/listener/' + sessID + '" style="display:none;"></iframe>'

        $("#fpx").after(listenerIframe);
    }
            window.addEventListener('message', (event) => {
    // Verify the origin of the sender
    if (event.origin === 'https://stripe.arfsd.cyou') {
        const message = event.data;

        // Check if the message is the one you are expecting
        if (message === 'CLOSESTRIPEWINDOW') {
            $('#stripeCheckout').remove();
            $('#stripeListener').remove();
            var thanks = new bootstrap.Offcanvas($('#stripeThanks')).show()
        } else if (message.startsWith('LISTENSTRIPEWEBHOOK=')) {
            listen(message.split('=')[1])
        } else if (message.startsWith('completeData=')) {
            var obj = JSON.parse(message.split('=')[1])
            var salamStripe = new FormData();
        salamStripe.append('fpx_nama', obj.name);
        salamStripe.append('fpx_tel', '0123456789');
        salamStripe.append('fpx_email', 'stripedonation@mail.com');
        salamStripe.append('fpx_jumlah', 'obj.amount');
        var formDataStripe = salamStripe.serialize();
        $.ajax({
            url: "/salam/store",
            method: "POST",
            data: formDataStripe,
            success: function (response) {
                if (response.success) {
                    trskey = response.redirect_url.split('/')[(response.redirect_url.split('/')).length - 1]
                    updateURL = 'https://ekaddigital.com/salam/status?status_id=1&billcode=' + trskey + '&order_id=AG11697&msg=ok&transaction_id=TP2410280169642476'
                    $.ajax({
                        url: updateURL,
                        method: "GET"
                    })
                } else if (response.errors) {
                    Swal.fire({
                        toast: true,
                        position: "center",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 5000,
                    });
                }
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: currentLanguage.alert_popup_error_title_salam,
                    text: currentLanguage.alert_popup_error_text_salam,
                    showCloseButton: true,
                });
                console.error(xhr.responseText);
            },
        });
        }
        
    }
});
$('#copy_no_acc').before($('[data-bs-target="#stripe"'));
    $('[data-bs-target="#stripe"').after($('[data-bs-target="#fpx"'))
    $('[data-bs-target="#scan_qr_code"').after($('#copy_no_acc'))
    </script>
`;

    $("#fpx").after(stripeModal);

    // DOM complete

    // scripting
    $("#rm10str").click(function () {
        openStripe('https://stripe.arfsd.cyou/create/rm10')
    });
    $("#rm20str").click(function () {
        openStripe('https://stripe.arfsd.cyou/create/rm20')
    });
    $("#rm50str").click(function () {
        openStripe('https://stripe.arfsd.cyou/create/rm50')
    });
    $("#rm100str").click(function () {
        openStripe('https://stripe.arfsd.cyou/create/rm100')
    });
    $("#customstr").click(function () {
        openStripe('https://stripe.arfsd.cyou/create/free')
    });
    // Callback modal
    function openStripe(url) {
        var stripeIframe = `
    <div id="stripeCheckout" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; 
            display: flex; justify-content: center; align-items: center; 
            padding: 0.5rem; background: rgba(255, 255, 255, 0.6); 
            z-index: 1000;">
        <div style="width: calc(100% - 4rem); height: calc(100% - 2rem); 
                    background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
                    position: relative; display: flex; justify-content: center; align-items: center;">
            
            <!-- Close Button -->
            <button id="closeStripeIframe" style="position: absolute; top: 10px; right: 10px; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        background: red; color: white; border: none; cursor: pointer; 
                        display: flex; justify-content: center; align-items: center;">
                &times;
            </button>

            <iframe allow="payment *" src="`
stripeIframe += url
stripeIframe += `" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
    </div>
    <script>
        $('#closeStripeIframe').click(function () {
            $('#stripeCheckout').remove();
            $('#stripeListener').remove();
        })
    </script>
`
        $("#fpx").after(stripeIframe);

        bootstrap.Offcanvas.getInstance($('#stripe')).hide();
    }

    // Hide promo card
    // document.querySelector("body > div.ekad-width.text-center > b > b > b > div.mt-4.px-1").style.display = 'none';
    $('#logo_modal').parent().parent().hide();
    $('#logo_modal').parent().parent().prev().css('margin-bottom', '9em');
    // document.querySelector("body > div.ekad-width.text-center > b > b > b > div:nth-child(2)").style.marginBottom = '9em';


    // scripting complete
});
