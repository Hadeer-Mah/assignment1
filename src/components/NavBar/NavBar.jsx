import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <>
      <nav className={`${styles.headerNav} navbar navbar-expand-lg`}>
  <div className="container">
    <Link className="navbar-brand text-white fs-1 fw-bold" to="">Start React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className={`${styles.menu} navbar-nav ms-auto fw-bold`}>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
