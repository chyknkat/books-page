(function(){
	var app = angular.module('reviewsPage', []);

	app.controller('PageController', function(){
		this.items = books;
	});
	
	app.controller('ListController', function(){
		this.current = 0;
		    
		    this.setCurrent = function(value) {
		      if (value === null){
		        this.current = 0;
		      } else {
		      this.current = value;
		        }
		    };
	});

	/*app.controller('DisplayController', function(){
		
	});*/

	app.controller('TabController', function(){
	    this.tab = 1;
	    
	    this.setTab = function(selectTab){
	      this.tab = selectTab;
	    };
	    
	    this.isSet = function (selectedTab) {
	      return this.tab === selectedTab;
	    };
	});

	var books = [
	{
		name: "The Night Circus",
		author: "Erin Morgenstern",
		image: "images/nightcircus.jpg",
		description: "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night.\nBut behind the scenes, a fierce competition is underway: a duel between two young magicians, Celia and Marco, who have been trained since childhood expressly for this purpose by their mercurial instructors. Unbeknownst to them both, this is a game in which only one can be left standing. Despite the high stakes, Celia and Marco soon tumble headfirst into love, setting off a domino effect of dangerous consequences, and leaving the lives of everyone, from the performers to the patrons, hanging in the balance.",
		reviews: [
		{
			stars: 5,
			review: "If you like magicians and mystery, this is the book for you!",
			reviewer: "Kat"
		}
		]
	},
	{
		name: "Touch the Dark",
		author: "Karen Chance",
		image: "images/touchthedark.jpg",
		description: "Cassandra Palmer can see the future and communicate with spirits—talents that make her attractive to the dead and the undead. The ghosts of the dead aren’t usually dangerous; they just like to talk…a lot. The undead are another matter.\nLike any sensible girl, Cassie tries to avoid vampires. But when the bloodsucking mafioso she escaped three years ago finds Cassie again with vengeance on his mind, she’s forced to turn to the vampire Senate for protection.\nThe undead senators won’t help her for nothing, and Cassie finds herself working with one of their most powerful members, a dangerously seductive master vampire—and the price he demands may be more than Cassie is willing to pay....",
		reviews: [
		{
			stars: 5,
			review: "Ghosts, vampires, a clairvoyant protagonist...what's not to like?",
			reviewer: "Kat"
		}
		]
	}
	];
})();