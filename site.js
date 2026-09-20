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
