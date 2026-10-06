$(document).ready(function () {
  var images = [
    { src: "Images/anh1.jpg", width: 240, height: 160 },
    { src: "Images/anh2.jpg", width: 320, height: 195 },
    { src: "Images/anh3.jpg", width: 500, height: 343 }
  ];

  $("#jsstyle").on("click", function () {
    var index = Math.floor(Math.random() * images.length);
    var img = images[index];

    var $img = $("<img>").attr({
      src: img.src,
      width: img.width,
      height: img.height,
      alt: "Random image"
    });

    $("#imageBox").empty().append($img);
  });
});