function submit_function(el){
	caller = $(el);

	// In case it is called a second time
	reset_redtext();

	form = caller.parent('form');

	required_fields = form.find('.required input');

	required_fields.each(function(){
		if($(this).is(":checkbox")){
			// Because checkboxes are weird
			if($(this)[0].checked == false){
				$(this).parent().addClass('red-text');
			}

		}else{
			if($(this).val() === ""){
				$(this).parent().addClass('red-text');
			}
		}
		
	});

}

function reset_redtext(){

	// Remove all red-text classes in the document
	$(".red-text").removeClass('red-text');
}

function update_circles(){

	// Every element with class "circle"
	$(".circle").each(function(){
		me = $(this);
		
		size = '2em';

		me.css('background-color', 'black');
		me.css('width', size);
		me.css('height', size);
		me.css('border-radius', me.height()/2);

		console.log(this);
	});
}


$(document).ready(function(){

	required_fields = $(".required");
	$("#response_area p").html("There are " + required_fields.length + " required fields");
});