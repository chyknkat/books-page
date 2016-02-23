(function(){
	var app = angular.module('reviewsPage', []);

	app.controller('PageController', function(){
		var self = this;
		this.items = books;
		this.show = function(item){
			item.hidden = !item.hidden;
			for (var i = 0; i < self.items.length; i++) {
			    var currentItem = self.items[i];
			    if (currentItem != item) {
			            currentItem.hidden = true;
			    }; 
			};
		};
	});

	app.controller('TabController', function() {
	    this.tab = 1;
	    
	    this.setTab = function(selectTab){
	      this.tab = selectTab;
	    };
	    
	    this.isSet = function (selectedTab) {
	      return this.tab === selectedTab;
	    };
	});

	app.controller('ReviewController', function() {
	    this.review = {};
	    this.addReview = function(item) {
	    	item.reviews.push(this.review);
	    	this.review = {};
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
			body: "If you like magicians and mystery, this is the book for you!",
			reviewer: "Kat"
		}
		],
		hidden: false
	},
	{
		name: "Touch the Dark",
		author: "Karen Chance",
		image: "images/touchthedark.jpg",
		description: "Cassandra Palmer can see the future and communicate with spirits—talents that make her attractive to the dead and the undead. The ghosts of the dead aren’t usually dangerous; they just like to talk…a lot. The undead are another matter.\nLike any sensible girl, Cassie tries to avoid vampires. But when the bloodsucking mafioso she escaped three years ago finds Cassie again with vengeance on his mind, she’s forced to turn to the vampire Senate for protection.\nThe undead senators won’t help her for nothing, and Cassie finds herself working with one of their most powerful members, a dangerously seductive master vampire—and the price he demands may be more than Cassie is willing to pay....",
		reviews: [
		{
			stars: 5,
			body: "Ghosts, vampires, a clairvoyant protagonist...what's not to like?",
			reviewer: "Kat"
		}
		],
		hidden: true
	}
	];
})();