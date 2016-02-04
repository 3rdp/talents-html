jQuery(document).ready(function($) {
	$(".faq-item a").click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass("open");
	})
})