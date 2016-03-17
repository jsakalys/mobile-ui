var menuItems = [
	{
		title: 'My Schedule & Bidding',
		children: [
			{
				title: 'Reporting'
			},
			{
				title: 'Agriculture and Customs'
			},
			{
				title: 'Known Crewmembmer'
			},
			{
				title: 'Product Safety Data Search'
			}
		]
	},
	{
		title: 'Safety'
	},
	{
		title: 'Training'
	},
	{
		title: 'Administration',
		children: [
			{
				title: 'OJI and Leaves'
			},
			{
				title: 'Pay and Benefits'
			},
			{
				title: 'Performance'
			},
			{
				title: 'Inflight Resource Directory',
			},
			{
				title: 'Mobile and Web'
			},
			{
				title: 'AFA'
			}
		]
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
		var menuPosition = document.getElementById('mainMenu').style.left;
		if (menuPosition !== '0px') {
			document.getElementById('mainContent').style.left = '100vw';
			document.getElementById('mainMenu').style.left = '0px';
		} else {
			document.getElementById('mainContent').style.left = '0px';
			document.getElementById('mainMenu').style.left = '-100vw';
		};
	});

	// var menuItems = document.getElementsByClassName('menu-item');
	// for (var i=0; i < menuItems.length; i++) {
 //    	menuItems[i].addEventListener('click', function(){
	// 		alert('yo')
	// 	});
 //    };
});