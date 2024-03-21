const Galeri = () => {
  return (
    <div class="galeri">
      <h1>GALERI</h1>
      <div class="galeri-container" data-aos="fade-up">
        <img src="src\assets\img\gal1.jpeg" alt="img1" />
        <img src="src\assets\img\gal2.jpeg" alt="img2" />
        <img src="src\assets\img\gal3.jpeg" alt="img3" />
        <img src="src\assets\img\gal4.jpeg" alt="img4" />
        <img src="src\assets\img\gal5.jpeg" alt="img5" />
        <img src="src\assets\img\gal6.jpeg" alt="img6" />
        <video controls>
          <source src="src\assets\vid\video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Galeri;
