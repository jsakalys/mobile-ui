var menuItems = [
	{
		title: 'My Schedule & Bidding',
		icon: 'fa-calendar',
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
		title: 'Safety',
		icon: 'fa-lightbulb-o'
	},
	{
		title: 'Training',
		icon: 'fa-leanpub'
	},
	{
		title: 'Administration',
		icon: 'fa-lock',
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
		title: 'Catering',
		icon: 'fa-cutlery'
	},
	{
		title: 'Brand',
		icon: 'fa-plane'
	},
	{
		title: 'Hotels',
		icon: 'fa-bed'
	},
	{
		title: 'My Base',
		icon: 'fa-home'
	},
	{
		title: 'Recognition',
		icon: 'fa-trophy'
	},
	{
		title: 'My Leadership Team',
		icon: 'fa-users'
	}
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function(){
	for (var i = 0; i < menuItems.length; i++) {
		// Append menu items to main menu
		if (menuItems[i].children) {
			document.getElementById('mainMenu').innerHTML += '<div class="menu-item" data-index=' + i + '><i class="icon fa ' + menuItems[i].icon + '"></i>' + menuItems[i].title + '<i class="right-arrow fa fa-angle-right"></i></div>'
		} else {
			document.getElementById('mainMenu').innerHTML += '<div class="menu-item" data-index=' + i + '><i class="icon fa ' + menuItems[i].icon + '"></i>' + menuItems[i].title + '</div>'
		}
	};

	// Show main menu on navi click
	document.getElementById('menuButton').addEventListener('click', function(){
		// change menu bars to 'x' sign or vice versa
		if (this.classList.contains('fa-bars')) {
			this.classList.remove('fa-bars');
			this.classList.add('fa-times');
		} else if (this.classList.contains('fa-times')) {
			this.classList.remove('fa-times');
			this.classList.add('fa-bars');
		};
		var menuPosition = document.getElementById('mainMenu').style.left;
		if (menuPosition !== '0px') {
			// Bring main content out of view
			document.getElementById('mainContent').style.right = '-100vw';
			// Bring main menu into view
			document.getElementById('mainMenu').style.left = '0px';
		} else {
			// Bring main content into view
			document.getElementById('mainContent').style.right = '0';
			// Bring main menu out of view
			document.getElementById('mainMenu').style.left = '-100vw';
			// Bring sub menu out of view
			document.getElementById('subMenu').style.right = '-100vw';
		};
	});

	// Sort of hacky, but use setTimeout so that menuItems is not undefined when attempting to add event listener to each menu item
	setTimeout(function(){
		var allMenuItems = document.getElementsByClassName('menu-item');
		for (var i = 0; i < menuItems.length; i++) {
	    	allMenuItems[i].addEventListener('click', function(e){
	    		// Change color to represent active state
	    		e.target.style.background = 'white';
	    		e.target.style.color = '#3371A7';
	    		// Change child nodes to represent active state
	    		if (e.target.childNodes) {
	    			e.target.childNodes[0].style.background = 'white';
		    		e.target.childNodes[0].style.color = '#3371A7';
		    		e.target.childNodes[2].style.background = 'white';
		    		e.target.childNodes[2].style.color = '#3371A7';
	    		};
	    		// Get index of item clicked
	    		var idx = this.getAttribute('data-index');
				if (menuItems[idx].children) {
					// Bring sub menu into view
					document.getElementById('subMenu').style.right = '0px';
					// Reset contents of div
					document.getElementById('subMenu').innerHTML = '';
					// Append sub menu heading
					document.getElementById('subMenu').innerHTML += '<div id="menuHeading" class="menu-item">' + menuItems[idx].title + '<i class="right-x fa fa-times"></i></div>';
					// Hide sub menu if menu heading clicked, again using setTimeout
					setTimeout(function(){
						document.getElementById('menuHeading').addEventListener('click', function(){
							// Bring sub menu out of view if heading clicked
							document.getElementById('subMenu').style.right = '-100vw';
							// Remove active state colors
							e.target.style.background = '#3371A7';
		    				e.target.style.color = '#FFFFFF';
				    		if (e.target.childNodes) {
				    			e.target.childNodes[0].style.background = '#3371A7';
					    		e.target.childNodes[0].style.color = '#FFFFFF';
					    		e.target.childNodes[2].style.background = '#4680B1';
					    		e.target.childNodes[2].style.color = '#FFFFFF';
				    		};
						});
					}, 0);
					for (var j = 0; j < menuItems[idx].children.length; j++) {
						// Append sub menu items
						document.getElementById('subMenu').innerHTML += '<div class="menu-item sub-item">' + menuItems[idx].children[j].title + '</div>';
					};
				} else {
					// Bring sub menu out of view
					document.getElementById('subMenu').style.right = '-100vw';
					// Iterate through menu items, reset colors
				};
			});
	    };
	}, 0);

});