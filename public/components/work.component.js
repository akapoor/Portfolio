'use strict';

(function () {
	angular.module('portfolioApp')
		.component('work', {
			controller: WorkController,
			template: `
			    <!-- Page Content -->
				    <div class="intro-header">
			        <div class="container">

			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="intro-message">
			                        <h1>Anshul Kapoor</h1>
			                        <h3>Create | Travel | Inspire</h3>
			                        <hr class="intro-divider">
			                        <ul class="list-inline intro-social-buttons">
			                            <li ng-repeat="item in $ctrl.socialMediaLinks track by item.id">
				                            <a href={{item.src}} target="_blank" class="btn btn-default btn-lg">
			                                    <i class={{item.icon}}></i>
			                                    <span class="network-name">{{item.name}}</span>
			                                </a>
			                            </li>
			                        </ul>
			                    </div>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.intro-header -->

			    <a  name="#work"></a>
			    <div class="content-section-b">

			        <div class="container">

			            <div class="row">
			                <div class="col-lg-6 col-lg-offset col-sm-push-6  col-sm-6">
			                    
			                    <div class="clearfix"></div>
			                    <h2>Bluetooth Bicycle Tracker</h2>
			                    <i>Duration: 1 year</i>
			                    <p class="lead" ng-bind-html="$ctrl.trilliumBody"></p>
			                </div>

			                <div class="col-lg-4 col-sm-pull-6 col-sm-6 trullium-photo">
							    <uib-carousel active="$ctrl.active" interval="$ctrl.myInterval" no-wrap="$ctrl.noWrapSlides">
							      <uib-slide ng-repeat="slide in $ctrl.trilliumSlides track by slide.id" index="slide.id">
							        <img ng-src="{{slide.src}}" style="margin:auto;">
							        <div class="carousel-caption">
							          <h4 class="caption-color">{{slide.name}}</h4>
							        </div>
							      </uib-slide>
							    </uib-carousel>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-b -->

			    <div class="content-section-a">

			        <div class="container">

			            <div class="row">
			                <div class="col-lg-7 col-sm-6">
			                    <hr class="section-heading-spacer">
			                    <div class="clearfix"></div>
			                    <h2 class="section-heading">
				                    Gobble
				                    <img class="gobble-logo" ng-src={{$ctrl.gobbleContent.logo}}>
			                    </h2>
			                    <p class="lead" ng-bind-html="$ctrl.gobbleContent.body"></p>
			                </div>
			                <div class="gobble-video col-lg-3 col-sm-3">
			                	<iframe width="178" height="315" src="https://www.youtube.com/embed/mu8Znil3PCc" frameborder="0" allowfullscreen></iframe>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-a -->

			    <div class="content-section-b">

			        <div class="container">

			            <div class="row">
			                <div class="col-lg-6 col-lg-offset col-sm-push-6  col-sm-6">
			                    
			                    <div class="clearfix"></div>
			                    <h2>Lumberjack</h2></br>
			                    <i>Duration: 10 weeks</i>
			                    <p class="lead" ng-bind-html="$ctrl.lumberjackBody"></p>
			                </div>

			                <div class="lumberjack-photo col-lg-6 col-sm-pull-6 col-sm-6">
							    <uib-carousel active="$ctrl.active" interval="$ctrl.myInterval" no-wrap="$ctrl.noWrapSlides">
							      <uib-slide ng-repeat="slide in $ctrl.lumberjackSlides track by slide.id" index="slide.id">
							        <img ng-src="{{slide.src}}" style="margin:auto">
							        <div class="carousel-caption">
							          <h4 class="caption-color">{{slide.name}}</h4>
							        </div>
							      </uib-slide>
							    </uib-carousel>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-b -->

			    <div class="content-section-a">

			        <div class="container">

			            <div class="row">
			                <div class="col-lg-12 col-sm-12">
			                    <hr class="section-heading-spacer">
			                    <div class="clearfix"></div>
			                    <h2 class="section-heading">Infrastructure Monitoring Tool</h2>
			                    <i>Duration: 10 weeks</i>
			                    <p class="lead" ng-bind-html="$ctrl.jpmBody"></p>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-a -->
			`
		});


	function WorkController ($scope, portfolio, content) {

		//Get text for all work experience here
		this.$onInit = function () {
			this.socialMediaLinks = portfolio.getMediaLinks();

			this.trilliumBody = content.trilliumContent().body;
			this.trilliumSlides = portfolio.trilliumProjData();

			this.gobbleContent=content.gobbleContent();

			this.lumberjackBody = content.lumberjackContent().body;
			this.lumberjackSlides = portfolio.lumberjackProjData();

			this.jpmBody = content.jpmContent().body;

			this.myInterval = 5000;
			this.noWrapSlides = "false";
			this.active = "0";
		}
	
	}

})();