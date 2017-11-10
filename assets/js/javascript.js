$( document ).ready(function() {
    $("#tweet").on("submit", function(event){
    		event.preventDefault()
    		$("#mensajes").append(
    					'<div class="div_texto row"> '
	    					+ '<div class="col-md-12"'
		    					+'<p>' + $("#texto").val() + ' </p> '
		    					+ '<i class="fa fa-heart-o likeable" aria-hidden="true">0</i>'
		    					+ '<i class="fa fa-times" aria-hidden="true"></i>'
	    					+ '</div>'
    					+ '</div>')
    } )


    $("#mensajes").on("click", ".fa-times", function(event){
    	 $(this).parent().parent().fadeOut(500);
    })

    $("#mensajes").on("click", ".fa-heart-o", function(event){
    	$(this).html(parseInt($(this).html())+1)
    	$(this).css({
            'color': 'red',
        })    
    });


});