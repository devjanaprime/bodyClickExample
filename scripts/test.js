console.log( 'tester sourced' );

$( document ).ready( function(){
  console.log( 'doc ready' );
  // testerButton click on body
  $( 'body' ).on( 'click', '.testerButton', function(){
    // this functionfires when any button of class "testerButton" is clicked
    // even those appended to the DOM after page load
    console.log( 'testerButton on click delegated to body');
  });

  // newTesterButton on click
  $( '#newTesterButton' ).on( 'click' , function(){
    console.log( 'creating new testerButton');
    // target outputDiv
    var outputDiv = $( '#outputDiv' );
    outputDiv.append( "<button class='testerButton'>Generated Tester Button</button>" )
  }); // end newTesterButton

  // testerButton on click
  $( '.testerButton' ).on( 'click' , function(){
    // this function only fires for buttons of class "testerButton" that were already there on page load
    console.log( 'testerButton on click');
  }); // end testerButton on click
}); // end doc ready
