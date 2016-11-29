// Functions
 
 $(document).ready(function () {

	var id = window.location.href.split("#");
	
	if(id.indexOf("#") == -1){
		$('#top-menu [href="#start"]').addClass("current");
	}
	
	
	// Cache selectors
	var lastId,
		topMenu = $("#top-menu"),
		topMenuHeight = topMenu.outerHeight()+50,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+55;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 300);
		e.preventDefault();
		
		history.pushState(undefined, undefined, href);
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .filter("[href]").removeClass("current")
			 .end().filter("[href='#"+id+"']").addClass("current");
	   }                   
	});

});

	   
	   
