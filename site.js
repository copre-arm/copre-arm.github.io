'use strict';
const video = document.querySelector('#project-video');
const status = document.querySelector('#video-status');
let pendingTime = null;
function seekToChapter() {
  if (pendingTime === null) return;
  video.currentTime = pendingTime;
  pendingTime = null;
}
video.addEventListener('loadedmetadata', seekToChapter);
video.addEventListener('error', () => {
  status.textContent = 'Playback could not load. Please try the download link above.';
});
document.querySelectorAll('[data-time]').forEach(button => {
  button.addEventListener('click', () => {
    pendingTime = Number(button.dataset.time);
    status.textContent = '';
    if (video.readyState >= 1) seekToChapter();
    video.play().catch(() => {
      status.textContent = 'Press play in the video player to continue.';
    });
    video.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  });
});

// One supplemental player; selecting another clip never starts it automatically.
const experimentPlayer = document.querySelector('#experiment-player');
const experimentStatus = document.querySelector('#experiment-status');
document.querySelectorAll('[data-clip]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    if (link.getAttribute('aria-current') === 'true') return;
    experimentPlayer.pause();
    document.querySelectorAll('[data-clip]').forEach(item => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'true');
    experimentPlayer.poster = link.dataset.poster;
    experimentPlayer.querySelector('source').src = link.getAttribute('href');
    experimentPlayer.querySelector('a').href = link.getAttribute('href');
    experimentPlayer.querySelector('a').textContent = `Open ${link.dataset.title}`;
    document.querySelector('#experiment-title').textContent = link.dataset.title;
    document.querySelector('#experiment-description').textContent = link.dataset.description;
    document.querySelector('#experiment-duration').textContent = `${link.dataset.duration} · 720p · 1×`;
    document.querySelector('#experiment-download').href = link.getAttribute('href');
    experimentStatus.textContent = '';
    experimentPlayer.load();
  });
});
experimentPlayer.addEventListener('error', () => {
  experimentStatus.textContent = 'Playback could not load. Please try Download clip.';
});
document.querySelectorAll('video').forEach(player => {
  player.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== player) other.pause(); });
  });
});
