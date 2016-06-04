'use strict';

(function () {
	angular.module('portfolioApp')
		.factory('portfolio', function () {

			//Define methods for this service
			return {
				getTopics: getTopics,
				trilliumProjData: trilliumProjData
			};

			//Get all the topics for the header
			function getTopics () {
				var topics = [
						{ id: 0, name: 'About' },
						{ id: 1, name: 'Projects' },
						{ id: 2, name: 'Resume' },
						{ id: 3, name: 'Adventures'}
				];
				return topics;
			}

			//Hold references to location of media files for trillium project
			function trilliumProjData () {
				var data = [
					{ id: 0, src: "/public/img/final.png", name: "Final Product", type: "img"},
				//	{ id: 1, src: "https://www.youtube.com/watch?v=VMC9IFaDLIc", name: "Demo Video", type: "video"},
					{ id: 1, src: "/public/img/wireframe_ipad_home.png", name: "Wireframe 1", type: "img"},
					{ id: 2, src: "/public/img/wireframe_user_details.png", name: "Wireframe 2", type: "img"},
					{ id: 3, src: "/public/img/wireframe_ipad_settings.png", name: "Wireframe 3", type: "img"},
				];
				return data;
			}

		});

})();