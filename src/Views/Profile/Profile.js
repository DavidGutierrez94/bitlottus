import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import NavBar from './../../Sections/NavBar'
import LeftNavBar from './../../Sections/LeftNavBar'
// import BreadCrumb from './../../Sections/BreadCrumb'


class Profile extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <LeftNavBar/>
                <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                    <div className="row">
                        <ol className="breadcrumb">
                            <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home"></use></svg></a></li>
                            <li className="active">Icons</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Perfil</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;