import React from "react";

const Home = () => {
  return (
    <>
      <div class="jumbotron">
        <img
          class="avatar"
          src="src\assets\img\avatar.png"
          alt="avatar-image"
        />
        <h1>Muhammad Rafly Wirayudha</h1>
        <p>
          I'm an informatics engineering student at
          <span> UIN Sultan Syarif Kasim Riau</span>
        </p>
        <a class="about-btn" href="#biodata">
          About me{" "}
        </a>
        <div class="link-btn">
          <a href="https://www.linkedin.com/in/muhammad-rafly-wirayudha-619653239/">
            <img
              class="link-icon"
              src="src\assets\img\linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/raflywirayudha">
            <img
              class="link-icon"
              src="src\assets\img\github.png"
              alt="github"
            />
          </a>
          <a href="https://www.instagram.com/raflywirayudhaa/">
            <img
              class="link-icon"
              src="src\assets\img\instagram.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div class="biodata-container">
        <h2 id="biodata">Biodata</h2>
        <div class="biodata">
          <img
            src="src\assets\img\profile.png"
            alt="profile-photo"
            data-aos="fade-right"
          />
          <div class="table-container" data-aos="fade-left" left>
            <table>
              <tr>
                <th>Nama</th>
                <td>: Muhammad Rafly Wirayudha</td>
              </tr>
              <tr>
                <th>Alamat</th>
                <td>: Jln. Kruing Raya Blok B22 No.7</td>
              </tr>
              <tr>
                <th>Jenis Kelamin</th>
                <td>: Laki-laki</td>
              </tr>
              <tr>
                <th>TTL</th>
                <td>: Tembilahan, 17 Januari 2004</td>
              </tr>
              <tr>
                <th>Agama</th>
                <td>: Islam</td>
              </tr>
              <tr>
                <th>Golongan Darah</th>
                <td>: A</td>
              </tr>
              <tr>
                <th>No. Telepon</th>
                <td>: 085173393301</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <h2 class="hobi">Hobi</h2>
      <div class="hobi-container">
        <div class="hobi-detail" data-aos="fade-right" data-aos-duration="1000">
          <img src="src\assets\img\gaming.png" alt="Bermain Game" />
          <h3>Bermain Game</h3>
        </div>
        <div class="hobi-detail" data-aos="fade-up" data-aos-duration="1000">
          <img src="src\assets\img\listen.png" alt="Mendengarkan Musik" />
          <h3>Mendengarkan Musik</h3>
        </div>
        <div class="hobi-detail" data-aos="fade-left" data-aos-duration="1000">
          <img src="src\assets\img\movie.png" alt="Menonton Film" />
          <h3>Menonton Film</h3>
        </div>
      </div>
      <div class="container">
        <div class="wrapper">
          <h2>Pendidikan</h2>
          <ul class="sessions" data-aos="zoom-in">
            <li>
              <div class="time">2019 - 2022</div>
              <p>SMA Negeri 1 Tembilahan</p>
            </li>
            <li>
              <div class="time">2022 - present</div>
              <p>UIN Sultan Syarif Kasim Riau</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-container">
        <form class="form">
          <h2>Contact Me</h2>
          <input type="text" placeholder="Your email" class="input" />
          <textarea placeholder="Your message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
