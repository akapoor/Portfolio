'use strict';

(function () {
	angular.module('portfolioApp')
		.factory('portfolio', function () {

			//Define methods for this service
			return {
				getTopics: getTopics,
				getMediaLinks: getMediaLinks,
				trilliumProjData: trilliumProjData,
				lumberjackProjData : lumberjackProjData
			};

			//Get all the topics for the header
			function getTopics () {
				var topics = [
						{ id: 0, name: 'Work', src: ''},
						{ id: 1, name: 'About', src: 'about'},
						{ id: 2, name: 'Resume', src: '/public/assets/Anshul_Fulltime_Resume.pdf' },
						//{ id: 3, name: 'Gallery', src: 'gallery'}
				];
				return topics;
			}

			//Get all the social media links for banner
			function getMediaLinks () {
				var topics = [
						{ id: 0, name: 'Github', src: 'https://github.com/akapoor', icon: 'fa fa-github fa-fw'},
						{ id: 1, name: 'Linkedin', src: 'https://linkedin.com/in/anshulkapoor27', icon: 'fa fa-linkedin fa-fw'},
						{ id: 2, name: 'Email', src: "mailto:anshuls11@gmail.com?Subject=Hello, let's connect!", icon: 'fa fa-envelope fa-fw'},
						{ id: 3, name: 'Instagram', src: 'https://www.instagram.com/wanderingsanta/', icon: 'fa fa-instagram fa-fw'}
				];
				return topics;
			}

			//Hold references to location of media files for trillium project
			function trilliumProjData () {
				var data = [
					{ id: 0, src: "/public/assets/img/final.png", name: "Final Product", type: "img"},
					{ id: 1, src: "/public/assets/img/wireframe_edit_user.png", name: "Update  Status Wireframe", type: "img"},
					{ id: 2, src: "/public/assets/img/wireframe_ipad_settings.png", name: "Settings Wireframe", type: "img"},
					{ id: 3, src: "/public/assets/img/wireframe_ipad_home.png", name: "Home Screen Wireframe", type: "img"}
				];
				return data;
			}

			//Hold references to location of media files for lumberjack project
			function lumberjackProjData () {
				var data = [
					{ id: 0, src: "/public/assets/img/lumberjack_1.png", name: "Home Page", type: "img"},
					{ id: 1, src: "/public/assets/img/lumberjack_2.png", name: "Filter Logs", type: "img"},
					{ id: 2, src: "/public/assets/img/lumberjack_3.png", name: "View Log Details", type: "img"},
					{ id: 3, src: "/public/assets/img/lumberjack_4.png", name: "High-Level System Design", type: "img"},
				];
				return data;
			}

		});

})();