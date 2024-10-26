//loader
window.addEventListener('load', function() {
  showLoaderAndOverlay();
});

function showLoaderAndOverlay() {
  document.querySelector('.loader-wrapper').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }, 2000); // duration
}

function showLoaderAndRedirect() {
  document.querySelector('.loader-wrapper').style.display = 'flex';
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500); //duration
}