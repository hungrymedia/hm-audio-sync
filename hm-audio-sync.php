<?php
/*
Plugin Name: HM Audio Sync
Plugin URI: http://hungry-media.com
Description: Allows A/B comparison of 2 audio tags within a page or post. See plugin page for details
Version: 0.1
Author: Warren Harrison
Author URI: http://hungry-media.com
License: MIT
*/


class HMAudioSync{

  function init(){

  }

  function front_scripts(){
    wp_enqueue_script('jquery');
    wp_enqueue_script('hm-audio-sync', plugins_url('hm-audio-sync.js', __FILE__), array('jquery'));
  }

}

add_action( 'init', array('HMAudioSync', 'init') );
add_action( 'wp_enqueue_scripts', array('HMAudioSync', 'front_scripts') );