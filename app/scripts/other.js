var dogone = {
	legs:4,
	ears:2,
	bark: function(){
		console.log ('Woof!')
	},
}

var dogtwo = {
	legs:4,
	ears:2,
	bark: function(){
		console.warn ('Woof!')
	},
}

var dog = {
	legs:4,
	ears:2,
	bark: function(){
		console.error ('Woof!')
	},
	countEars: function(){
		console.log('I have ' +this.ears 'ears. ');
	}
}
