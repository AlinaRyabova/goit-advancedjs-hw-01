import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.getElementById('vimeo-player');

const player = new Player(vimeoPlayer);

const STORAGE_KEY = 'videoplayer-current-time';

const storedTime = localStorage.getItem(STORAGE_KEY);

if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds.toString());
}
