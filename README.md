#Plugin written for WordPress, version 5.6 

### #Blog article about the creation of this plugin 

[] https://piernikarniacafe.blogspot.com/2021/01/wordpress-woocommerce-wydruk-do.html


#### #Business Problem: 
 - We want to print a list of orders from the website,
   a) with a description of the client - because there are individual requirements
   
   b) with a list of products
   
   c) each product has additional attributes (boy / girl, box, dedication)
   
   d) shipping address and contact telephone number - sometimes different than the customer's address
   
   e) keep it legible but take up little space so as not to waste paper 
---

##Version Demo:

youTuBe - https://youtu.be/cJ-gm4N4QFA?t=2

ghPage - https://born-kes.github.io/WP_Plugin_Print_Shop_Order/


---


Plugin:

##### #path: 
 pso_kes\
---

.
 

## #Technologies 
#### and use in project  

### #`php`

hook_wordpress 

````
 wp_register_script ( ... )
 wp_enqueue_script ( 'main.js' )
 wp_register_style ( ... )
 wp_enqueue_style ( 'main.css' )
````

````
add_action ( 'admin_footer', ...) 
````

hook_wooCommerce
``none;``

### #`javaScript`
use strict => es6

####from WordPress
````
wp.template ( ... )
````

####from WooCommerce
````
wc_orders_params.ajax_url
wc_orders_params.preview_nonce
````

#### jQuery

````
addClass()
toggleClass()
removeClass()

event click()

ajax()
````

#### css
````
@media print {...}

#PrintBoxKes .breakRowPrint+.breakRowPrint,
#PrintBoxKes>.breakRowPrint:last-child {
    display: none;
}
.breakRowPrint div:not(.breakPage)::before {
    content: " Dodaj ";
}
.breakRowPrint .breakPage::before {
    content: " Usuń ";
}
````

=====================================================

### package Dependencies

````
Dependencies": {
    "copyfiles": "^2.4.1",
    "gh-pages": "^3.0.0",
    "lite-server": "^2.5.4"
  }
````
- run localhost demo
```
npm i
npm run dev
```

- run deploy to repozytory

`npm run deploy`() =>{ `run copy files to build` => `build push to repo gh-pages branch` }


---
###Config Lite Server

bs-config.json 
````
{
  "port": 8000,
  "files": ["./**/*.{html,htm,css,js}"],
  "server": {
    "baseDir": ["./src","./pso_kes" ]
  }
}
````

---
###Documentation copyfiles 

https://www.npmjs.com/package/copyfiles

