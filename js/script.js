function mudaCor() {
    let r = 0;
    let g = 0;
    let b = 0;
  
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
  
    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;
  
    const banner1 = document.querySelector(".banner-1");
    const banner2 = document.querySelector(".banner-2");
  
    const images = [
      "image-1.jpg",
      "image-2.jpg",
      "image-3.jpg"
    ];
    let currentImageIndex = 0;
  
    function changeImage() {
      banner1.style.backgroundImage = `url(${images[currentImageIndex]})`;
      banner2.style.backgroundImage = `url(${images[currentImageIndex]})`;
      currentImageIndex = (currentImageIndex + 1) % images.length;
      setTimeout(changeImage, 2000);
    }
  
    changeImage();
  }
  
  mudaCor();
  