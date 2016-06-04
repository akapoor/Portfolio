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
			                            <li>
			                                <a href="https://github.com/akapoor" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
			                            </li>
			                            <li>
			                                <a href="https://linkedin.com/in/anshulkapoor27" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
			                            </li>
			                            <li>
			                                <a href="mailto:anshuls11@gmail.com?Subject=Hello!" class="btn btn-default btn-lg" target="_blank"><i class="fa fa-envelope fa-fw"></i> <span class="network-name">Email</span></a>
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
			                    <p class="lead">As a part of my senior project at RIT, I worked on designing and building 
			                    an iOS app (for iPads) to manage different types of race events. This app was primarly built to manage 
			                    the <a href="http://www.aidsredribbonride.org/" target="_blank">AIDS Red Ribbon Ride</a>, hosted annually by Trillium Health.
			                    </br></br>
			                    Key tasks included:
			                    </br> - Negotiating requirements with sponsor
			                    </br> - Designing iOS app wireframes
			                    </br> - Implementing iOS storyboards using the wireframes
			                    </br> - Implementing map functionality, show racers on the map, provide ETA calculations for each racer
			                    </br> - Testing functionality
			                    </br> - Creating final <a href="https://www.youtube.com/watch?v=VMC9IFaDLIc" target="_blank">demo video</a>
			                    </p>
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
				                    <img class="gobble-logo" ng-src="/public/assets/img/gobble_logo.png">
			                    </h2>
			                    <p class="lead">Gobble was the result of a weekend long startup competetion, RIT48. This is mobile app 
			                    that allows local restaurants and grocery stores to setup their own loyalty rewards program.
			                    </br></br>
			                    Key tasks included:
			                    </br> - Conducting market research (reaching out to prosective clients)
			                    </br> - Developing business model, cash flow analysis
			                    </br> - Building prototype
			                    </br> - Pitching the final product
			                    </br>*Gobble also qualified as a semi-finalist in the 
			                    <a href="http://apply.nybplan.com/" target="_blank">New York State Business Plan Competetion</a>.
			                    </p>
			                </div>
			                <div class="gobble-video col-lg-5 col-sm-6">
			                	<iframe width="420" height="315" src="https://www.youtube.com/embed/mu8Znil3PCc" frameborder="0" allowfullscreen></iframe>
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
			                    <p class="lead">I designed and developed a custom log parsing web tool from during 
			                    my summer internship at <a href="http://www.timeinc.com/brands/">Time Inc.</a> I used a agile approach,
			                    where I delivered working product in weekly iterations. I started form a POC and bulid iteratively upon that.
			                    Constant customer interaction was key in order to incorporate their feedback.
			                    </br></br>
			                    Key tasks included:
			                    </br> - Building early prototypes
			                    </br> - Parsing information from multiple log formats
			                    </br> - Implementing API to serve data
			                    </br> - Developing front end to present the data
			                    </br> - Migrating code from test to prod environment
			                    </br> - Documenting all work 
			                    </p>
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
			                    <p class="lead">During my summer internship at <a href="https://www.jpmorganchase.com/">JP Morgan</a>, 
			                    I built an infrastructure monitoring
			                    tool which served to replace the old monitoring system. The web app had to serve real time
			                    information and there was a high focus on usability.</br></br>
			                    Key tasks included:
			                    </br> - Building prototypes
			                    </br> - Parsing data in real time
			                    </br> - Building APIs to serve data
			                    </br> - Designing a usable application
			                    </br> - Documenting and pitching the final product
			                    </p>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-a -->
			`
		});


	function WorkController ($scope, portfolio) {


		this.$onInit = function () {
			this.trilliumSlides = portfolio.trilliumProjData();
			this.lumberjackSlides = portfolio.lumberjackProjData();
			this.myInterval = 5000;
			this.noWrapSlides = "false";
			this.active = "0";
		}
		
	}

})();