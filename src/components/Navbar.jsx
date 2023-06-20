import Logo from "./Logo"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="container navbar navbar-expand-lg navbar-light mb-5">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bold d-flex justify-content-center align-items-center" href="#">
        PHOTOBY 
        <img src="/assets/images/logo.png" className="ps-2" alt="" /> 
    </NavLink>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link" href="#">SERVICES</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="projects" className="nav-link" href="#">PROJECTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="contact" className="nav-link" href="#">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar