import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

//Functional Component --- new way returns a JSX
export default function Header(props) {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Props is passed from the parent component App.js to this child component */}
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                    
                    {/* props is passed on this ternary operator as a bool value */}
                    {props.searchBar?<form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>:"no search bar"}
                    
                  
                    </div>
                </div>
      </nav>
      
       
    </div>
  )
}

//If user does'nt pass any value in the parent component then default props values are taken.
Header.defaultProps ={
  title:"Your title here",
  searchBar: true
}

//This checks the datatype of prop that we use and is used for strict checking.
Header.propTypes ={
  title: PropTypes.string,
  searchBar: PropTypes.bool
}
