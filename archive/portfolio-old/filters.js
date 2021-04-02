$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#columns").fadeTo(300, .1);
		$("#columns div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#columns").fadeTo(300, 1);
    }, 300); 
		
	});
});