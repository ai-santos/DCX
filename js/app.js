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

var videoPlayButton,
  videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
  }

videoMethods.renderVideoPlayButton()

// function zoomableDivs() {
//   return document.querySelectorAll( '.whyVFix div' );
// }

// function applyZoomOut( item ) {
//   item.classList.remove( 'zoom-in' );
//   item.classList.add( 'zoom-out' );
// }

// function zoom_out( yOffset ) {
//   if( yOffset == 0 ) {
//     zoomableDivs().forEach( applyZoomOut );
//   }
// }

// function applyZoomIn( item ) {
//   item.classList.remove( 'zoom-out' );
//   item.classList.add( 'zoom-in' );
// }

// function zoom_in( yOffset ) {
//   if( yOffset > 2 ) {
//     zoomableDivs().forEach( applyZoomIn );
//   }
// }
