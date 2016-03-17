var menuItems = [
	{
		title: 'My Schedule and Bidding',
	},
	{
		title: 'Safety'
	},
	{
		title: 'Training'
	},
	{
		title: 'Administration'
	},
	{
		title: 'Catering'
	},
	{
		title: 'Brand'
	},
	{
		title: 'Hotels'
	},
	{
		title: 'My Base'
	},
	{
		title: 'Recognition'
	},
	{
		title: 'My Leadership Team'
	}
]

document.addEventListener('DOMContentLoaded', function(){
	for (var i = 0; i < menuItems.length; i++) {
		// Append menu items
		document.getElementById('mainMenu').innerHTML += '<div class="menu-item"><span class="icon"></span>' + menuItems[i].title + '</div>'

	}
	// Show main menu on navi click
	document.getElementById('menuButton').addEventListener('click', function(){
		var menuPos = document.getElementById('mainMenu').style.left;
		if (menuPos !== '0px') {
			document.getElementById('mainContent').style.left = '100vw';
			document.getElementById('mainMenu').style.left = '0px';
		} else {
			document.getElementById('mainContent').style.left = '0px';
			document.getElementById('mainMenu').style.left = '-100vw';
		};
	});
});