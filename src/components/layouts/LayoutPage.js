import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import MainMenu from "../menus/MainMenu"
import ShortcutMenu from "../menus/ShortcutMenu"
import ReferenceMenu from "../menus/ReferenceMenu"

import "../styles/global.css"
import * as searchStyles from "../styles/searchWrapper.module.css"

import Logo from "../../images/logo.png"

export default function LayoutPage({ children }) {
  // Using graphql static query hook
  const customData = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = customData.site.siteMetadata

  return (
    <>
      <header>
        <section className="container header-top">
          <div className="row my-3">
            <div className="col-md-4 col-sm-12">
              <div className={searchStyles.searchWrapper}>
                <input className="form-control me-2 search-input" type="text" placeholder="Search" />
                <button className={`btn btn-primary ${searchStyles.searchSubmit}`} type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" style={{width: 20 + 'px'}}>
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="header-middle">
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" alt={title} src={Logo} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainMenu">
              <MainMenu></MainMenu>
            </div>
          </div>
        </nav>
      </section>

      <section className="container header-bottom text-center">
        <div className="headline-wrapper py-2">
          <div className="alert alert-success alert-dismissible mt-2">
            <button type="button" className="btn-close" data-bs-dismiss="alert"><span style={{display: "none"}}>X</span></button>
            <strong>Success!</strong> This alert box could indicate a successful or positive action.
          </div>
        </div>
      </section>

      <section className="content container">
        { children }
      </section>

      <footer className="container-fluid footer-wrapper">
        <section className="row bg-primary text-white pt-2">
          <div className="col-lg-4 col-sm-12">
            <h2>Shortcuts</h2>
            <ShortcutMenu></ShortcutMenu>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h2>Reference Links</h2>
            <ReferenceMenu></ReferenceMenu>
          </div>

          <div className="col-lg-4 col-sm-12">
            <h2>Contacts</h2>
            <p>
              <span>Street Names, District Code, Country Name</span>
            </p>
            <p>
              <span>info@example.com</span>
            </p>
            <p>
              <span>+ 12 345 678 90</span>
            </p>
            <p>
              <span>+ 09 876 543 21</span>
            </p>
          </div>
        </section>

        <section className="copyright text-center p-2">
          <p>Copyright @2022</p>
        </section>
      </footer>
    </>
  )
}
