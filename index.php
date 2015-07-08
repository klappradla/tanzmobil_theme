<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<title>Tanzmobil</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<?php wp_head();?>
</head>
<body ng-app="tanzmobil" class="i-container">

	<header>
    <object id="car" type="image/svg+xml" data="<?php echo get_bloginfo('template_url') ?>/images/car.svg">Your browser does not support SVG</object>
    <nav ng-controller="NavCtrl as nav">
      <a ng-class="{ active: nav.isActive('/') }" ng-href="/wordpress/#/">Home</a>
      <a ng-class="{ active: nav.isActive('/about')}" ng-href="/wordpress/#about">About</a>
      <a ng-class="{ active: nav.isActive('/news')}" ng-href="/wordpress/#news">News</a>
      <a ng-class="{ active: nav.isActive('/interviews') }" ng-href="/wordpress/#interviews">Interviews</a>
      <a ng-class="{ active: nav.isActive('/contact')}" ng-href="/wordpress/#contact/">Contact</a>
    </nav>
  </header>

  <main ng-view=""></main>

  <footer class="i-g">
    <div class="i-12 footer-copywrite">
      <i class="fa fa-copyright"></i> tanzmobil 2015 Vienna | Berlin
    </div>
    <div class="i-12 footer-social">
      <a href="https://www.facebook.com/" target="blank"><i class="fa fa-facebook-official fa-2x"></i></a>
      <a href="https://instagram.com/" target="blank"><i class="fa fa-instagram fa-2x"></i></a>
      <a href="https://vimeo.com/" target="blank"><i class="fa fa-vimeo-square fa-2x"></i></a>
    </div>
  </footer>

	<?php wp_footer();?>
</body>
</html>