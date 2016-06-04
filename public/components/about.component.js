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
			                    <p class="lead">A graduate from Rochester Institute of Technology with double majors in Software Engineering and 
			                    Economics. </br></br>
			                    A positive minded individual who loves creating impactful things.  </br></br>
			                    A full stack developer with a passion for building usable web and mobile applications.</br></br>
			                    A youtuber who ejoys documening his travels around the globe. Stop by my 
			                    <a href="https://youtu.be/UCnDFEpBgpM?list=PLUN8nOZUIgcVuMwsFHXBPfe4ebW6KgWqB" target="_blank">
			                    <i class="fa fa-youtube fa-fw"></i>Youtube</a> channel to check them out. 

			                    </p>
			                </div>
			                <div class="anshul-photo col-lg-5 col-sm-6">
			                    <img class="img-responsive" src="/public/assets/img/anshul_pic.png" alt="">
			                    <p><i>Post hike celebratory photo on top of Table Mountain (Cape Town, South Africa)</i></p>
			                </div>
			            </div>

			        </div>
			        <!-- /.container -->

			    </div>
			    <!-- /.content-section-a -->
			    
			`
		});


	function AboutController () {


	}

})();