const Portofolio = () => {
  return (
    <div class="portofolio">
      <h1>PORTOFOLIO</h1>
      <div
        class="portofolio-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="src\assets\img\portofolio1.png" alt="portofolio1" />
        <div class="porto-text">
          <h2 class="project-title">Scratch Library</h2>
          <p class="project-detail">
            Aplikasi katalog buku sederhana yang mengimplementasikan struktur
            data graph
          </p>
          <div class="lang-container">
            <p class="lang">Java</p>
            <p class="lang">JavaFX</p>
            <p class="lang">CSS</p>
          </div>
          <div class="git-btn">
            <a href="https://github.com/hzqula/scratch-library">
              Go to repository
            </a>
          </div>
        </div>
      </div>
      <div
        class="portofolio-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src="src\assets\img\portofolio2.jpg" alt="portofolio2" />
        <div class="porto-text">
          <h2 class="project-title">Rectangle Calculator</h2>
          <p class="project-detail">
            Aplikasi sederhana menghitung luas dan keliling persegi panjang
          </p>
          <div class="lang-container">
            <p class="lang">Java</p>
            <p class="lang">Android Studio</p>
          </div>
          <div class="git-btn">
            <a href="https://github.com/raflywirayudha/KalkulatorPersegiPanjang">
              Go to repository
            </a>
          </div>
        </div>
      </div>
      <div class="portofolio-container" data-aos="fade-left">
        <img src="src\assets\img\portofolio3.png" alt="portofolio3" />
        <div class="porto-text">
          <h2 class="project-title">CupangPedia</h2>
          <p class="project-detail">
            Website sederhana yang membahas tentang ikan cupang. contohnya
            mengenai morfologi, pakan, habitat, dll
          </p>
          <div class="lang-container">
            <p class="lang">HTML</p>
            <p class="lang">CSS</p>
            <p class="lang">JavaScript</p>
          </div>
          <div class="git-btn">
            <a href="https://github.com/raflywirayudha/website-cupangpedia">
              Go to repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
