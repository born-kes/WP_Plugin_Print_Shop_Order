<?php

add_action( 'manage_posts_extra_tablenav', 'addButtonToPrint' );
function addButtonToPrint() {
echo '<a class="button getDataToPrintByKES hidden" href="#" >Wersja do Druku</a>';
}

add_action( 'admin_footer', 'addBoxToPrintDate' );
function addBoxToPrintDate() {
echo '<div id="PrintBoxKes"></div>';
}

