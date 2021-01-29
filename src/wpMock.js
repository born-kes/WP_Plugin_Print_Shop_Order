/* global $ */
const response = [24,26,27,25];

const wc_orders_params = {
    ajax_url : 'fackAjaxData.json',
    preview_nonce : 123
};

const wp = {
    template : (a)=> ()=>$(`#tmpl-${a}-${response.shift()}` ).html()
};