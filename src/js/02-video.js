import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTime, 1000));

function onTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const getTime = localStorage.getItem('videoplayer-current-time');
if (getTime !== null) {
  player.setCurrentTime(getTime);
}
