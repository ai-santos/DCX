window.addEventListener( 'scroll', function( event ) {
  setOverlay( window.pageYOffset );
  zoom_out( window.pageYOffset );
  zoom_in( window.pageYOffset );
});

function setOverlay( yOffset ) {
  var navBar = document.getElementsByTagName( 'nav' )[ 0 ];

  if( yOffset > 0 ) {
    navBar.classList.add( 'overlay' );
  } else {
    navBar.classList.remove( 'overlay' );
  }
}

function zoomableDivs() {
  return document.querySelectorAll( '.whyVFix div' );
}

function applyZoomOut( item ) {
  item.classList.remove( 'zoom-in' );
  item.classList.add( 'zoom-out' );
}

function zoom_out( yOffset ) {
  if( yOffset == 0 ) {
    zoomableDivs().forEach( applyZoomOut );
  }
}

function applyZoomIn( item ) {
  item.classList.remove( 'zoom-out' );
  item.classList.add( 'zoom-in' );  
}

function zoom_in( yOffset ) {
  if( yOffset > 2 ) {
    zoomableDivs().forEach( applyZoomIn );
  }
}
