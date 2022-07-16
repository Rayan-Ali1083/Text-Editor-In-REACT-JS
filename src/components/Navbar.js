import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className='navbar navbar-expand' style={{color: props.textColor, backgroundColor: props.navbackColor}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"  style={{color: props.textColor, backgroundColor: props.navbackColor}}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{color: props.textColor, backgroundColor: props.navbackColor}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{color: props.textColor, backgroundColor: props.navbackColor}}>{props.aboutText}</a>
              </li> 
            </ul>

        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-light" onClick={() => props.toggleMode('light')}>Light</button>
            <button type="button" className="btn btn-dark" onClick={() => props.toggleMode('dark')}>Dark</button>
            <button type="button" className="btn-green" onClick={() => props.toggleMode('green')}>Green</button>
            <button type="button" className="btn-purple" onClick={() => props.toggleMode('purple')}>Purple</button>
          </div>
        </div>
        
          </div>
        </div>
      </nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}