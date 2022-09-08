import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0F1724" }}>
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="#" style={{ color: "white" }}><i className="fa-solid fa-qrcode" /></a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active " style={{color:"white"}} aria-current="page" href="Home">Home</a> */}
                <Link className="nav-link active" to='/' aria-current="page" style={{ color: "white" }}> Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Shope" style={{ color: "white" }}  >Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Profile" style={{ color: "white" }}  >Profile</a>
              </li>
              {/* <li className="nav-item dropdown" style={{color:"white"}}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Dropdown
          </a>
          <ul className="dropdown-menu" style={{color:"white"}} aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true" style={{ color: "white" }}>Disabled</a>
              </li> */}
            </ul>
            <div className="text-white">
              <a href className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar