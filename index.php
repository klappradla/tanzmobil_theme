<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<title>Tanzmobil</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head();?>
</head>
<body ng-app="tanzmobil" class="i-container">

	<header>
    <object id="car" type="image/svg+xml" data="<?php echo get_bloginfo('template_url') ?>/images/car.svg">Your browser does not support SVG</object>
    <nav ng-controller="NavCtrl as nav">
      <a ng-class="{ active: nav.isActive('/') }" ng-href="/wordpress/#/">Home</a>
      <a ng-class="{ active: nav.isActive('/interviews') }" ng-href="/wordpress/#interviews">Interviews</a>
      <a ng-class="{ active: nav.isActive('/about')}" ng-href="/wordpress/#about">About</a>
      <a ng-class="{ active: nav.isActive('/contact')}" ng-href="/wordpress/#contact/">Contact</a>
    </nav>
  </header>

  <main ng-view=""></main>

  <footer class="i-g">
    <div class="i-12 footer">footer goes here</div>
  </footer>

	<?php wp_footer();?>
</body>
</html>