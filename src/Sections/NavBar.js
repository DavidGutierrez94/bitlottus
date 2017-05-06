import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render(){
    return(

          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href=""></a>
                <ul className="user-menu">
                  <li className="dropdown pull-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><svg className="glyph stroked male-user"><use xlinkHref="#stroked-male-user"></use></svg> Usuario <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#"><svg className="glyph stroked male-user"><use xlinkHref="#stroked-male-user"></use></svg> Perfil</a></li>
                      <li><a href="#"><svg className="glyph stroked gear"><use xlinkHref="#stroked-gear"></use></svg> Herramientas</a></li>
                      <li><a href="#/"><svg className="glyph stroked cancel"><use xlinkHref="#stroked-cancel"></use></svg> Cerrar Sesion</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

    )
  }
}
