<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<title>tanzmobil</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <base href="/">
	<?php wp_head();?>
</head>
<body ng-app="tanzmobil" ng-controller="MainCtrl" class="i-container">

	<header class="i-g">
    <object car id="car" type="image/svg+xml" data="<?php echo get_bloginfo('template_url') ?>/assets/images/car.svg">Your browser does not support SVG</object>
    <nav ng-controller="NavCtrl as nav" class="i-12">
      <a ng-class="{ active: nav.isActive('/') }" ng-href="/">Home</a>
      <a ng-class="{ active: nav.isActive('/about')}" ng-href="/about">About</a>
      <a ng-class="{ active: nav.isActive('/interviews') }" ng-href="/interviews">Interviews</a>
      <a ng-class="{ active: nav.isActive('/contact')}" ng-href="/contact">Contact</a>
      <search-form searchCallback="search(term)"></search-form>
    </nav>
  </header>

  <main ng-view=""></main>

  <footer ng-controller="FooterCtrl" class="i-g">
    <footer-social></footer-social>
    <footer-imprint></footer-imprint>
  </footer>

	<?php wp_footer();?>

  <!-- start google -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-61874302-1', 'auto');
    ga('send', 'pageview');
  </script>
  <!-- end google -->
</body>
</html>