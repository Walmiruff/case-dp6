// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Inicializano Google Analytics
window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;

ga('create', 'UA-12345-6', 'auto');
sendPageView();

function sendPageView() {
    ga('set', 'page', '/' + getHash());
    ga('send', 'pageview')
}

function getHash() {
    return location.hash.slice(1);
}

// Caso documento esteja carregado e houver mudança na hash
window.addEventListener('hashchange', function () {
    if (getHash()) {
        document.title = getHash().charAt(0).toUpperCase() + getHash().slice(1) + 'DP6 Case - Prova Técnica'
    } else {
        document.title = 'DP6 Case - Prova Técnica'
    }
    sendPageView();
}, false);

// Event click no menu entre em contato
$(".menu-lista-item:last").prev().click(function () {
    ga('send', 'event', {
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo',
        transport: 'beacon'
    });
});

// Event click no menu dowload pdf
$(".menu-lista-item:last").click(function () {
    ga('send', 'event', {
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});

// Event click btn analise
$(".card-montadoras").click(function () {
    ga('send', 'event', {
        eventCategory: 'analise',
        eventAction: $(this).attr("data-name"),
        eventLabel: 'ver_mais'
    });
});

// Event para campos preenchidos do form
$("input").blur(function () {
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: $(this).attr("id"),
        eventLabel: 'preencheu'
    });
});

// Event para o envio de formulario
$("form").submit(function(){
    ga('send', 'event', {
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });
  });