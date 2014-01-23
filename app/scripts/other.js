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

var zombieFred = {
	legs:2,
	arms:1,
	alive: false,
	headless: false,

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
	}
}

var Blondie = {
	legs:2,
	arms:2,
	alive: true,
	scare: false,
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

	nordicKill:function(aVic){
		aVic.headless=true
		return "F**k you zed head!"
	}
}


