'use strict';

(function () {
	angular.module('portfolioApp')
		.component('home', {
			controller: HomeController,
			template: `
				<!-- Navigation -->
			    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
			        <div class="container topnav">
			            <!-- Brand and toggle get grouped for better mobile display -->
			            <div class="navbar-header">
			                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			                    <span class="sr-only">Toggle navigation</span>
			                    <span class="icon-bar"></span>
			                    <span class="icon-bar"></span>
			                    <span class="icon-bar"></span>
			                    <span class="icon-bar"></span>
			                </button>
			                <a class="navbar-brand topnav" ui-sref="home">AK.</a>
			            </div>
			            <!-- Collect the nav links, forms, and other content for toggling -->
			            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul class="nav navbar-nav navbar-right">
			                    <li ng-repeat="topic in $ctrl.topics track by topic.id">
			                        <a href="#{{topic.name.toLowerCase()}}">{{topic.name}}</a>
			                    </li>
			                </ul>
			            </div>
			            <!-- /.navbar-collapse -->
			        </div>
			        <!-- /.container -->
			    </nav>

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
			`
		});


	function HomeController (portfolio) {

		this.$onInit = function () {
			this.topics = portfolio.getTopics();
		}

	}

})();