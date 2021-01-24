/* global jQuery, wp , wc_orders_params */
"use strict";

const deleteBoxPrintByKES = function () {
    jQuery(this)
        .parents('.wc-backbone-modal')
        .remove();
};
const validatePrintShopOrder = function (id, bool) {
    listPrintShopOrder[id] = bool;
};
const printShopOrder = function () {
    if(!timeIdKES)
        return timeIdKES = setTimeout(printShopOrder, 200);

    const validatePrint = listPrintShopOrder.filter(function (v) {
        return v === false
    });
    if (validatePrint.length ===0 && timeIdKES!=='end')
    {
        clearTimeout(timeIdKES);
        timeIdKES = 'end';
        return  window.print();
    }
};
const getDataToPrintByKES = function () {

    const r = jQuery;
    const box_kes = r('#the-list');
    r('.check-column input', box_kes).each(function () {
        const id = r(this).val(); //*/
        validatePrintShopOrder(id, false);
        r.ajax({
            url: wc_orders_params.ajax_url,
            data: {
                order_id: id,
                action: "woocommerce_get_order_details",
                security: wc_orders_params.preview_nonce
            },
            type: "GET",
            success: function (e) {
                const template = wp.template('wc-modal-view-order');

                const el = r( template( e.data ) );
                r('#PrintBoxKes').append( el );
                r('#PrintBoxKes div.modal-close')
                // .remove();
                    .removeClass()
                    .addClass('breakRowPrint');

                r('button.modal-close', el).click( deleteBoxPrintByKES );
                validatePrintShopOrder(id, true);
                setTimeout(printShopOrder, 100);
            }
        });
    });
    return false;
};

const listPrintShopOrder = [];

let timeIdKES = 0;

jQuery('.button.getDataToPrintByKES')
    .removeClass('hidden')
    .click(getDataToPrintByKES);