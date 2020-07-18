// check off specific todos by clicking//
// $("li").click(function(){
// 	//if LI is gray
// 	if($(this).css("color") ==="rgb(128, 128, 128)") {
// 		//so whenever you compare any color you have to write RGB form 
// 		//turn it black
// 			$(this).css({
// 				color: "black",
// 				textDecoration: "none"
// 					});
// 		}		
// 	//else
// 	else{
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 		});
// 	}
// 	//turn it gray 
// 	// $(this).css("color", "gray");
// 	// $(this).css("text-decoration", "line-through");
// 	// another way of writig the same above code	
// });

//Whole New way of doing the same thing above using class in CSS//
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo//
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();//it stops bubbling of event from prarent//
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing value entered in the input//
		var todoText = $(this).val();
		$(this).val("");
		//create new li and DD TO THE LIST//
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});