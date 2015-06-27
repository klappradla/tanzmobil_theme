<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="tanzmobil">
<head>
	<title>Tanzmobil</title>
	<?php wp_head();?>
</head>
<body>

	<div class="col-width">

		<header>
			<h1>Tanzmobil</h1>
			<p>Display a list of recent posts.</p>
		</header>

		<div ng-controller="mycontroller">
			<article ng-repeat="post in posts">
				<h3>{{ post.title }}</h3>
				<div ng-bind-html="post.content | unsafe"></div>
			</article>
		</div>

	</div>

	<main ng-view="">

	<?php wp_footer();?>
</body>
</html>