import React from 'react'
import './Style.css'
const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand fs-1 text-danger px-2 fw-bold ms-4" href="#">Meesho</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>

      <form className="d-flex me-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button type="button" class="btn asdr ">Search</button>
      </form>
      <ul className='d-flex hjikk'>
      <li className="nav-item">
          <a className="nav-link text-white" href="#">Men Shopping</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Women Shopping</a>
        </li>

        <li className="nav-item nret">
          <a className="nav-link text-white" href="#">Kids Shopping</a>
        </li>
        <li className="nav-item nret">
          <a className="nav-link text-white" href="#">Health</a>
        </li>
        <li className="nav-item nret">
          <a className="nav-link text-white" href="#">Beauty</a>
        </li>
        </ul>
        </ul>
    </div>
  </div>
</nav>
    </>

  )
}

export default Navbar
