const images = [
  "Images/anh1.jpg",
  "Images/anh2.jpg",
  "Images/anh3.jpg"
];

function display_random_image() {
  const imageContainer = document.getElementById("imageContainer");
  const image = images[Math.floor(Math.random() * images.length)];
  const imageElement = document.createElement("img");

  imageElement.src = image;
  imageElement.alt = "Random image";

  imageContainer.replaceChildren(imageElement);
}
