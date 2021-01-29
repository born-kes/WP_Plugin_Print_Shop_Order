/* global $ */
$('a, button, input[type=submit]').click(()=>{
    console.log('Sorry! This only demo Plugin');
   return false});

const addPlugin = () => {
    const from__pso_kes_PHP = {
        css: '/css/main.css',
        js: '/js/main.js'
    };
    const css = $('<link rel="stylesheet" media="all" />')
        .attr('href', from__pso_kes_PHP.css );
    const js = $('<script type="application/javascript"></script>')
        .attr('src', from__pso_kes_PHP.js);

    const from__woocommerce_print_order_PHP = $(`
      <a class="button getDataToPrintByKES order-status status-on-hold status-processing" href="#">
      Wersja do  Druku</a>
      <button class="closePrintByKES modal-close modal-close-link dashicons dashicons-no-alt"
              title="Zamknij Podgląd Wydruku">
        <span class="screen-reader-text">Zamknij Podgląd Wydruku</span>
      </button>
      <div id="PrintBoxKes"></div>
`);

    $('#wpwrap').append(from__woocommerce_print_order_PHP);
    $('body').append([js, css]);
};

addPlugin();