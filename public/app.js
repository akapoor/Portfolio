'use strict';

angular.module('portfolioApp', [ 'ui.router', 'ui.bootstrap', 'ngAnimate'])
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'header': {
						component: 'home'
					},
					'content': {
						component: 'content'
					} 
				}
			})
			
	});