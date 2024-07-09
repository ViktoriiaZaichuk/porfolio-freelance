<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title><?php wp_title(''); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <link rel="canonical" href="<?php echo get_permalink(); ?>">
    <meta name="robots" content="index, follow">
    <meta name="subject" content="Création de sites et applications web et mobile">
    <meta name="copyright" content="Viktoriia Zaichuk">
    <meta name="author" content="Viktoriia Zaichuk">
    <meta name="keywords" content="Viktoriia Zaichuk, Developpeur Web, Web Design, Creation sites web, Site Vitrine, Site e-commerce, Application web, Mobile, Toulouse">

    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="<?php wp_title(''); ?>">
    <meta property="og:description" content="<?php echo esc_attr(get_the_excerpt()); ?>">
    <meta property="og:url" content="<?php echo get_permalink(); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_the_post_thumbnail_url(); ?>">

    <?php wp_head(); ?>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <img class="header--img" src="<?php echo get_template_directory_uri(); ?>/assets/images/web-designer-toulouse.webp" alt="Web designer Toulouse">
        <div class="header--blck">
            <h2 class="loader-gsap-h2">Création de Sites Sur Mesure</h2>
            <nav class="loader-gsap-nav">
                <ul>
                    <li class="nav-button"><a href="#about">A propos</a></li>
                    <li class="nav-button"><a href="#portfolio">Portfolio</a></li>
                    <li class="nav-button"><a href="#services">Services</a></li>
                    <li class="nav-button"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="header--tags loader-gsap-tags">
            <span>ux</span>
            <span>ui</span>
            <span>design</span>
            <span>web</span>
            <span>DÉVELOPPEMENT</span>
        </div>
        <div class="header--left">
            <span></span>
        </div>
    </header>
        
