import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
      <ul class="navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/prestasi">Prestasi</Link>
        </li>
        <li>
          <Link to="/galeri">Galeri</Link>
        </li>
        <li>
          <Link to="/portofolio">Portofolio</Link>
        </li>
        <li>
          <Link to="/sertifikat">Sertifikat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
