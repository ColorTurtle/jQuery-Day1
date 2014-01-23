// Start Examples from Class
var dogone = {
	legs:4,
	ears:2,
	bark: function(){
		console.log ('Woof!')
	}
}

var dogtwo = {
	legs:4,
	ears:2,
	bark: function(){
		console.warn ('Woof!')
	}
}

var dog = {
	legs:4,
	ears:2,
	bark: function(){
		console.error ('Woof!')
	},
	countEars: function(){
		console.log('I have ' +this.ears+ ' ears.');
	}
}
// End Examples from Class
// Begin zombie story
var zombieFred = {
	name: 'Fred',
	legs:2,
	arms:1,
	alive: false,
	scare: false,
	headless: false,
	interests: ["brains", "eating out", "long walks"],

	groan: function(){
		console.warn('Brains! Need to nom on brains!');
	},

	kill:function(aVic){
		aVic.alive=false
		return "I'm still hungry for brains!"
	},

	scare:function(aVic){
		aVic.scare=true
		return "Ahhhhhhh!"
	},

// Couldn't get this one to work. Console kept saying 'interests not defined.'
	// share:function(aVic){
		// return 'Hi, my name is ' + name + '. I like' + interests + '. Call me maybe.'
	// }
}

var Blondie = {
	name: 'Blondie',
	legs:2,
	arms:2,
	alive: true,
	scare: false,
	interests: ["physics", "staying indoors", "barfing"],
	nordicKill:function(aVic){
		aVic.headless=true
		return "F**k you zed head!"
	}

}

var Mason = {
	legs:2,
	arms: 2,
	alive: true,
	scare: false,
	interests: ["Nordic Quests", "being a badass", "machete throwing"],

	nordicKill:function(aVic){
		aVic.headless=true
		return "F**k you zed head!"
	}
}


