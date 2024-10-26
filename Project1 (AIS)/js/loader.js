window.addEventListener('load', function() {
  showLoaderAndOverlay();
});
//loader
function showLoaderAndOverlay() {
  document.querySelector('.loader-wrapper').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }, 1500); // duration
}

function showLoaderAndRedirect() {
  document.querySelector('.loader-wrapper').style.display = 'flex';
  setTimeout(() => {
    window.location.href = "main.html";
  }, 1500); //duration
}