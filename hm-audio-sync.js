var hmDebug = false;

var au1;
var au2;

// Ignore pages that do not contain two audio tags
jQuery(document).ready( function(){

  if( jQuery('.audio-sync').length == 2 ){
    hmAudioSync();
  }

});

function hmAudioSync(){
  // audio-sync-play
  // audio-sync-a
  // audio-sync-b

  au1 = jQuery('.audio-sync')[0];
  au2 = jQuery('.audio-sync')[1];
  var firstRun = true;
  var syncingFeeling;
  var isAudioLoaded1 = false;
  var isAudioLoaded2 = false;

  au1.volume = 1;
  au2.volume = 0;

  jQuery('#audio-sync-play').click( function(){
    if( au1.paused || firstRun ){
      jQuery(this).text('Pause');
      au1.play();
      au2.play();
      jQuery('#audio-sync-a').removeAttr('disabled');
      jQuery('#audio-sync-b').removeAttr('disabled');
      if( firstRun ){ 
        jQuery('#audio-sync-a').attr('disabled','true');
        
      }
      firstRun = false;
      syncingFeeling = setInterval( 'syncTime()', 250 );
    }else{
      au1.pause();
      au2.pause();
      jQuery(this).html('Play');
      jQuery('#audio-sync-b').attr('disabled','true');
      jQuery('#audio-sync-b').attr('disabled', 'true');
      clearInterval( syncingFeeling );
    }
  });


  jQuery('#audio-sync-a').click( function(){
    au1.volume = 1;
    au2.volume = 0;
    jQuery('#audio-sync-b').removeAttr('disabled');
    jQuery('#audio-sync-a').attr('disabled','true');
    firstRun = false;
  });

  jQuery('#audio-sync-b').click( function(){
    au1.volume = 0;
    au2.volume = 1;
    jQuery('#audio-sync-a').removeAttr('disabled');
    jQuery('#audio-sync-b').attr('disabled','true');
    firstRun = false;
  });

}

function syncTime(){
  var msg = '';
  if( au1.volume == 1 ){
    au2.currentTime = au1.currentTime;
    msg = 'Now syncing B to A';
  }else{
    au1.currentTime = au2.currentTime;  
    msg = 'Now syncing A to B';
  }
  if( hmDebug ){ console.log( msg ); }
}