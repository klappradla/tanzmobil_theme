<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<title>Tanzmobil</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <base href="/">
	<?php wp_head();?>
</head>
<body ng-app="tanzmobil" class="i-container">

	<header class="i-g">
    <object car id="car" type="image/svg+xml" data="<?php echo get_bloginfo('template_url') ?>/images/car.svg">Your browser does not support SVG</object>
    <nav ng-controller="NavCtrl as nav" class="i-12">
      <a ng-class="{ active: nav.isActive('/') }" href="/">Home</a>
      <a ng-class="{ active: nav.isActive('/about')}" href="/about">About</a>
      <a ng-class="{ active: nav.isActive('/news')}" href="/news">News</a>
      <a ng-class="{ active: nav.isActive('/interviews') }" href="/interviews">Interviews</a>
      <a ng-class="{ active: nav.isActive('/contact')}" href="/contact">Contact</a>
    </nav>
  </header>

  <main ng-view=""></main>

  <footer class="i-g">
    <div class="i-12 footer-social">
      <a href="https://www.facebook.com/" target="blank"><i class="fa fa-facebook-official fa-2x"></i></a>
      <a href="https://instagram.com/" target="blank"><i class="fa fa-instagram fa-2x"></i></a>
      <a href="https://vimeo.com/" target="blank"><i class="fa fa-vimeo-square fa-2x"></i></a>
    </div>
    <div class="i-12 footer-copywrite">
      <span class="copywrite">
        <i class="fa fa-copyright"></i> tanzmobil 2015 Vienna | Berlin
      </span>
    </div>
  </footer>

	<?php wp_footer();?>
</body>
</html>