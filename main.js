var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${[i]}.jpg`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function displayChange(e) {
      var newDisplayImg = e.target.getAttribute('src');
      displayedImage.setAttribute('src', `${newDisplayImg}`);
      console.log(e);
      console.log(newDisplayImg);
  });
}

/* Wiring up the Darken/Lighten button */

btn.onclick = () => {
  var btnStatus = btn.getAttribute('class');

  if (btnStatus === 'dark') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
    btn.setAttribute('class', 'light');
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
    btn.setAttribute('class', 'dark');
  }

}
