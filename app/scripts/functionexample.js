var students = [
	{
		name: "Austin",
		age: 73,
		superPower: 'Eating Soup'
	},
	{
		name: "Matt",
		age: 90000000000,
		superPower: 'Sleeping'
	}, 
	{
		name: 'ALF',
		age: 1,
		superPower: 'Eating cats'
	}

]

students.forEach(function(student, index){
	var newDiv = $('<div class = "student-container">'+ student.name +'</div>')
	$('body').append(newDiv);
})


