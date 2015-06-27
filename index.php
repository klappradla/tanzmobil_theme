<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<title>Tanzmobil</title>
	<?php wp_head();?>
</head>
<body ng-app="tanzmobil">

	<header class="i-container" >
    <object id="car" type="image/svg+xml" data="<?php echo get_bloginfo('template_url') ?>/images/car.svg">Your browser does not support SVG</object>
    <nav ng-controller="NavCtrl as nav">
      <a ng-class="{ active: nav.isActive('/') }" ng-href="/#/">Home</a>
      <a ng-class="{ active: nav.isActive('/interviews') }" ng-href="/#interviews">Interviews</a>
      <a ng-class="{ active: nav.isActive('/about')}" ng-href="/#about">About</a>
      <a ng-class="{ active: nav.isActive('/contact')}" ng-href="/#contact/">Contact</a>
    </nav>
  </header>

  <main class="i-container" ng-view=""></main>

  <div class="footer"></div>

	<?php wp_footer();?>
</body>
</html>