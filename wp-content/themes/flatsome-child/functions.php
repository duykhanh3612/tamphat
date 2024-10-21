<?php

define( 'THEME_URL', get_stylesheet_directory_uri() );

function kodi_vn_scripts() {

 // Import CSS

wp_enqueue_style('my-style', THEME_URL . 'style.css', array(), '1.0.0', 'all');  
 
 // Import JS
 // jQuery Migrate
wp_enqueue_script('my-script', THEME_URL . '/assets/js/script.js', array('jquery'), '1.0.0', true);


    if (is_page( 31 )) {
        wp_enqueue_style('home-style', THEME_URL . '/assets/css/home.css', array(), '1.0.0', 'all');
        wp_enqueue_script('home-script', THEME_URL . '/assets/js/home.js', array('jquery'), '1.0.0', true);
    }
}

add_action('wp_enqueue_scripts', 'kodi_vn_scripts', 9999);