'use strict';

(function () {
	angular.module('portfolioApp')
		.component('about', {
			controller: AboutController,
			template: `
				<!-- Content -->
				<a  name="#about"></a>
			    <div class="content-section-a">

			        <div class="container">
			            <div class="row">
			                <div class="col-lg-6 col-sm-4">
			                    <hr >
			                    <div class="clearfix"></div>
			                    <h2 class="section-heading">About Me</h2>
			                    <p class="lead" ng-bind-html="$ctrl.mainContent.bio"></p>
			                </div>
			                <div class="anshul-photo col-lg-5 col-sm-6">
			                    <img class="img-responsive" src={{$ctrl.mainContent.photo}} alt="">
			                    <p><i>{{$ctrl.mainContent.caption}}</i></p>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-a -->
			`
		});

	function AboutController (content) {

		this.$onInit = function () {
			this.mainContent = content.aboutContent();
		}
	}

})();