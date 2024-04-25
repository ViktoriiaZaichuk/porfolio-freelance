<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title><?php wp_title(''); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <link rel="canonical" href="<?php echo get_permalink(); ?>">
    <meta name="robots" content="index, follow">

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
    <header>
        <nav>
            
        </nav>
    </header>
        
