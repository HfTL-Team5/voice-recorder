(function () {

    // Functions

    $(document).ready(function () {

        $("#header").removeClass("default");

        $(window).scroll(function () {

            if ($(this).scrollTop() > 20)
                $("#header").addClass("default").fadeIn('fast');
            else
                $("#header").removeClass("default").fadeIn('fast');

        });
		
		var id = window.location.href.split("#");
		id = id[id.length - 1];
		
		$('[href="#'+ id +'"]').addClass("current");

        $('a[href^="#"]').click(function () {

			$.each($("#top-menu a"), function(key, value){
				if($(value).hasClass("current")){
					$(value).removeClass("current");
				}
			});
		
			$(this).addClass("current");
		
            elementClick = $(this).attr("href");

            destination = $(elementClick).offset().top - 49;

            if ($.browser.safari)
                $('body').animate({ scrollTop: destination }, 1000);
            else
                $('html').animate({ scrollTop: destination }, 1000);

            // Change hash
            history.pushState(undefined, undefined, elementClick);

            return false;

        });

    });

})();