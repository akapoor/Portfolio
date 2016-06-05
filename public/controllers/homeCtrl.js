'use strict';

(function () {
	angular.module('portfolioApp')
		.controller('HomeController', [ '$scope', 'portfolio', function($scope, portfolio){

			//Load the nav bar items and social media links for header and footer
			this.$onInit = function () {
				this.topics = portfolio.getTopics();
				this.mediaLinks = portfolio.getMediaLinks();
			}
		}]);

})();