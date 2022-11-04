import React from "react"
import { Link } from "gatsby"

import MainMenu from "../menus/MainMenu"
import ShortcutMenu from "../menus/ShortcutMenu"
import ReferenceMenu from "../menus/ReferenceMenu"

import "../styles/global.css"

export default function LayoutPage({ children }) {
  return (
    <>
      <header>
        <section class="container header-top">
          <div class="row my-3">
            <div class="col-md-4 col-sm-12 social-wrapper">
              <a class="align-middle" href="https://www.facebook.com/SrijanOne/" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Facebook/Meta">
                <i class="bi bi-meta"></i>
              </a>
              <a class="align-middle" href="https://www.linkedin.com/company/srijan-technologies-pvt--ltd-" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
              <a class="align-middle" href="http://www.twitter.com/srijan" target="_blank" rel="noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Twitter">
                <i class="bi bi-twitter"></i>
              </a>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="search-wrapper">
                <input class="form-control me-2 search-input" type="text" placeholder="Search" />
                <button class="btn btn-primary search-submit" type="button">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section class="header-middle">
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img class="img-fluid" alt="logo" src="https://via.placeholder.com/150x75" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <MainMenu></MainMenu>
            </div>
          </div>
        </nav>
      </section>

      <section class="container header-bottom text-center">
        <div class="headline-wrapper row py-2">
          <div class="alert alert-success alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert">X</button>
            <strong>Success!</strong> This alert box could indicate a successful or positive action.
          </div>
        </div>
      </section>

      <section className="content">
        { children }
      </section>

      <footer class="container-fluid footer-wrapper">
        <section class="row bg-primary text-white pt-2">
          <div class="col-lg-4 col-sm-12">
            <h2>Shortcuts</h2>
            <ShortcutMenu></ShortcutMenu>
          </div>
          <div class="col-lg-4 col-sm-12">
            <h2>Reference Links</h2>
            <ReferenceMenu></ReferenceMenu>
          </div>

          <div class="col-lg-4 col-sm-12">
            <h2>Contacts</h2>
            <p>
              <i class="bi bi-building"></i>
              <span>Street Names, District Code, Country Name</span>
            </p>
            <p>
              <i class="bi bi-envelope"></i>
              <span>info@example.com</span>
            </p>
            <p>
              <i class="bi bi-telephone"></i>
              <span>+ 12 345 678 90</span>
            </p>
            <p>
              <i class="bi bi-printer"></i>
              <span>+ 09 876 543 21</span>
            </p>
          </div>
        </section>

        <section class="copyright text-center p-2">
          <p>Copyright @2022</p>
        </section>
      </footer>
    </>
  )
}
