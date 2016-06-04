'use strict';

(function () {
	angular.module('portfolioApp')
		.controller('NavigationController', [ '$scope', 'portfolio', function($scope, portfolio){
			this.$onInit = function () {
				this.topics = portfolio.getTopics();
			}
		}]);

})();