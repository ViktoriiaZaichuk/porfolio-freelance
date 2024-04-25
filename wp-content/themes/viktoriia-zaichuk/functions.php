<?php

function mytheme_supports() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('menus');
    register_nav_menu('primary', 'Primary Header Navigation');
    register_nav_menu('footer', 'Footer Navigation');
}


function enqueue_styles() {
    wp_enqueue_style('theme-style', get_stylesheet_uri() . '/style.css', array(), false, 'all');
    wp_enqueue_style('theme-style');

    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/styles/css/index.css', array(), false, 'all');
    wp_enqueue_style('main-style');
}

add_action('after_setup_theme', 'mytheme_supports');
add_action('wp_enqueue_scripts', 'enqueue_styles' );
