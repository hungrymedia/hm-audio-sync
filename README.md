# hm-audio-sync

Very basic Wordpress plugin that allows A/B comparison of 2 audio tags within a page or post.

## Instructions

* Download the plugin and unzip to your wp-content/plugins directory
* Activate plugin via Wordpress admin
* Include the following elements on your page or post

```html
<audio class="audio-sync" src="YOUR_FIRST_AUDIO_FILE"></audio>
<audio class="audio-sync" src="YOUR_SECOND_AUDIO_FILE"></audio>
<button id="audio-sync-play">Play</button>
<button id="audio-sync-a">A</button>
<button id="audio-sync-b">B</button>
```

Replace `YOUR_FIRST_AUDIO_FILE` and `YOUR_SECOND_AUDIO_FILE`, of course with your own files. File type will be dependent on browser support (mp3 should be safe for most).

The plugin will look for exactly 2 `<audio class="audio-sync>` tags on the page or post. If found, it will wire the buttons to control the playback and A/B switching of the audio files. Note the `id` attributes of the buttons. These must match for correct functioning.
