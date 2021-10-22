import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {

  // TODO: Fix hamburger menu
    render() {
      return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">Reddit BDI</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="/#" name="GetPosts" onClick={this.props.handleClick}>Fetch Reddit Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#" name="Questionnaire" onClick={this.props.handleClick}>BDI Questionnaire</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#" name="Resources" onClick={this.props.handleClick}>Resources</a>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  export default NavBar;