'use-strict';

(function () {
	angular.module('portfolioApp')
		.factory('content', function () {

			return {
				aboutContent: aboutContent,
				trilliumContent: trilliumContent,
				gobbleContent: gobbleContent,
				lumberjackContent: lumberjackContent,
				jpmContent: jpmContent
			};

			//About Section Content
			function aboutContent (){
				var content = 
				{
					bio: " A graduate from Rochester Institute of Technology with double majors in Software Engineering and "+ 
		                    "Economics.</br></br>"+
		                    "A positive minded individual who loves creating impactful things.</br></br>"+
		                    "A full stack developer with a passion for building usable web and mobile applications.</br></br>"+
		                    "A youtuber who ejoys documening his travels around the globe. Stop by my"+ 
		                    "<a href='https://youtu.be/UCnDFEpBgpM?list=PLUN8nOZUIgcVuMwsFHXBPfe4ebW6KgWqB' target='_blank'>"+
		                    "<i class='fa fa-youtube fa-fw'></i>Youtube</a> channel to check them out. ",

                    caption: "Post hike celebratory photo on top of Table Mountain (Cape Town, South Africa)",

                    photo: "/public/assets/img/anshul_pic.png"
                }; 
                return content;
			}

			//Trillium bicycle tracking project content
			function trilliumContent (){
				var content = 
				{
					body: "As a part of my senior project at RIT, I worked on designing and building "+
		                    "an iOS app (for iPads) to manage different types of race events. This app was primarly built to manage "+
		                    "the <a href='http://www.aidsredribbonride.org/' target='_blank'>AIDS Red Ribbon Ride</a>, hosted annually by Trillium Health."+
		                    "</br></br>"+
		                    "Key tasks included:"+
		                    "</br> - Negotiating requirements with sponsor"+
		                    "</br> - Designing iOS app wireframes"+
		                    "</br> - Implementing iOS storyboards using the wireframes"+
		                    "</br> - Implementing map functionality, show racers on the map, provide ETA calculations for each racer"+
		                    "</br> - Testing functionality"+
		                    "</br> - Creating final <a href='https://www.youtube.com/watch?v=VMC9IFaDLIc' target='_blank'>demo video</a>",

				};
				return content;
			}

			//Gobble project content
			function gobbleContent (){
				var content = 
				{
					body: "Gobble was the result of a weekend long startup competetion, RIT48. This is mobile app "+
		                    "that allows local restaurants and grocery stores to setup their own loyalty rewards program."+
		                    "</br></br>"+
		                    "Key tasks included:"+
		                    "</br> - Conducting market research (reaching out to prosective clients)"+
		                    "</br> - Developing business model, cash flow analysis"+
		                    "</br> - Building prototype"+
		                    "</br> - Pitching the final product"+
		                    "</br>*Gobble also qualified as a semi-finalist in the "+
		                    "<a href='http://apply.nybplan.com/' target='_blank'>New York State Business Plan Competition</a>.",

					logo: "/public/assets/img/gobble_logo.png",

					demo: "https://www.youtube.com/embed/mu8Znil3PCc"
				};
				return content;
			}

			//Body text for umberjack project
			function lumberjackContent (){
				var content = 
				{
					body: "I designed and developed a custom log parsing web tool from during "+
		                    "my summer internship at <a href='http://www.timeinc.com/brands/'>Time Inc.</a> I used a agile approach, "+
		                    "where I delivered working product in weekly iterations. I started form a POC and bulid iteratively upon that. "+
		                    "Constant customer interaction was key in order to incorporate their feedback."+
		                    "</br></br>"+
		                    "Key tasks included:"+
		                    "</br> - Building early prototypes"+
		                    "</br> - Parsing information from multiple log formats"+
		                    "</br> - Implementing API to serve data"+
		                    "</br> - Developing front end to present the data"+
		                    "</br> - Migrating code from test to prod environment"+
		                    "</br> - Documenting all work"
				};
				return content;
			}

			//Body text for jp morgan internship 
			function jpmContent (){
				var content =
				{
					body: "During my summer internship at <a href='https://www.jpmorganchase.com/'>JP Morgan</a>, "+
		                    "I built an infrastructure monitoring"+
		                    "tool which served to replace the old monitoring system. The web app had to serve real time"+
		                    "information and there was a high focus on usability.</br></br>"+
		                    "Key tasks included:"+
		                    "</br> - Building prototypes"+
		                    "</br> - Parsing data in real time"+
		                    "</br> - Building APIs to serve data"+
		                    "</br> - Designing a usable application"+
		                    "</br> - Documenting and pitching the final product"
				};
				return content;
			}
			
		});
})();
