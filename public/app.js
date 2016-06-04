'use strict';

angular.module('portfolioApp', [ 'ui.router', 'ui.bootstrap', 'ngAnimate'])
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('work', {
				url: '/',
				component: 'work'	
			})
			.state('about', {
				url: '/about',
				component: 'about'
			})
			.state('gallery', {
				url: '/gallery',
				component: 'gallery'
			})
			
	});