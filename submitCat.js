$('goButton').click(function(e){
	alert('yo!')

})

var getForm = function{

  $('catForm').sumbit(function( event ) {
  	console.log(event)
  }

  $( "span" ).text( "Wassup!" ).show().fadeOut( 1500 );
};