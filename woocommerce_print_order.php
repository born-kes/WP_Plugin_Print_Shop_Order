<?php

add_action( 'admin_footer', 'addBoxToPrintDate' );
function addBoxToPrintDate() {
    echo '<a class="button getDataToPrintByKES hidden order-status status-on-hold" href="#" >Wersja do Druku</a>';
    echo '<div id="PrintBoxKes"></div>';
}

