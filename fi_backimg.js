const images = [...new Array(5).keys()].map(
  (val, idx) => String(val + 1) + ".jpg"
);

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("body");

bgImage.style = `background-image:url(${chosenImage})`;
// document.body.appendChild(bgImage);
