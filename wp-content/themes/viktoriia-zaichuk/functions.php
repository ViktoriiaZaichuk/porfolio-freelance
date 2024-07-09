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
    wp_enqueue_style('theme-style', get_stylesheet_uri() . '', array(), false, 'all');
    wp_enqueue_style('theme-style');

    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/styles/css/index.css', array(), false, 'all');
    wp_enqueue_style('main-style');
}


function enqueue_gsap_scripts() {
    wp_enqueue_script('gsap', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', array(), '3.12.5', true);
    wp_enqueue_script('gsap-scroll-trigger', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', array(), '3.12.5', true);
    wp_enqueue_script('custom-gsap', get_template_directory_uri() . '/assets/js/custom-gsap.js', array('gsap'), '1.0.0', true);
}

function enqueue_js_scripts() {
    wp_enqueue_script('js-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('scripts'), '1.0.0', true);
}

add_action('after_setup_theme', 'mytheme_supports');
add_action('wp_enqueue_scripts', 'enqueue_styles' );
add_action('wp_enqueue_scripts', 'enqueue_gsap_scripts');
add_action('wp_enqueue_scripts', 'enqueue_js_scripts');
