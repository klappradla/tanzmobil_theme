<?php
/**
 * Tanzmobil.
 * Enqueue scripts and styles for the front end.
 *
 * @since 1.0.0
 */
function ae_scripts() {

	// Load main stylesheet.
	//wp_enqueue_style( 'ae-style', get_stylesheet_uri() );

	// Vendor
	wp_register_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js'
	);

	wp_register_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/bower_components/angular-route/angular-route.min.js'
	);

	wp_register_script(
		'angularjs-sanitize',
		get_stylesheet_directory_uri() . '/bower_components/angular-sanitize/angular-sanitize.min.js'
	);

	wp_register_script(
		'angularjs-resource',
		get_stylesheet_directory_uri() . '/bower_components/angular-resource/angular-resource.min.js'
	);

	wp_register_script(
		'angularjs-touch',
		get_stylesheet_directory_uri() . '/bower_components/angular-touch/angular-touch.min.js'
	);

	wp_register_script(
		'jquery',
		get_stylesheet_directory_uri() . '/bower_components/jquery/dist/jquery.min.js'
	);

	// App script
	wp_enqueue_script(
		'tmJS',
		get_template_directory_uri() . '/dist/main.js',
		array( 'jquery', 'angularjs', 'angularjs-route', 'angularjs-sanitize', 'angularjs-resource', 'angularjs-touch' )
	);

	// Load custom styles
	wp_enqueue_style( 'tmCSS', get_template_directory_uri() . '/dist/main.css');

	// Variables for app script
	wp_localize_script( 'tmJS', 'config',
		array(
			'api' => get_bloginfo( 'wpurl' ) . '/api',
			'root' => trailingslashit( get_template_directory_uri() )
		)
	);

}
add_action( 'wp_enqueue_scripts', 'ae_scripts' );