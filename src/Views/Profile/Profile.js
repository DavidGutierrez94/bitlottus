import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import NavBar from './../../Sections/NavBar'
import LeftNavBar from './../../Sections/LeftNavBar'
// import BreadCrumb from './../../Sections/BreadCrumb'


class Profile extends Component {
    render(){
        return(
            <div >
                <NavBar/>
                <LeftNavBar/>
                <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                    <div className="row">
                        <ol className="breadcrumb">
                            <li><a href="#"><svg className="glyph stroked home"><use xlinkHref="#stroked-home"></use></svg></a></li>
                            <li className="active">Inicio</li>
                        </ol>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Inicio</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="panel panel-widget green-3">
                                <div className="row no-padding">
                                    <div className="col-sm-3 col-lg-5 widget-left panel-orange">
                                        <svg className="glyph stroked app-window-with-content"><use xlinkHref="#stroked-app-window-with-content"></use></svg>
                                    </div>
                                    <div className="col-sm-9 col-lg-7 widget-right">
                                        <div className="large">25.2k</div>
                                        <div className="text-muted">Ads Vistos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="panel panel-widget green-3">
                                <div className="row no-padding">
                                    <div className="col-sm-3 col-lg-5 widget-left panel-orange">
                                        <svg className="glyph stroked app-window-with-content"><use xlinkHref="#stroked-app-window-with-content"></use></svg>
                                    </div>
                                    <div className="col-sm-9 col-lg-7 widget-right">
                                        <div className="large">25.2k</div>
                                        <div className="text-muted">Ads Vistos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="panel panel-widget green-3">
                            <div className="row no-padding">
                                <div className="col-sm-3 col-lg-5 widget-left panel-orange">
                                    <svg className="glyph stroked app-window-with-content"><use xlinkHref="#stroked-app-window-with-content"></use></svg>
                                </div>
                                <div className="col-sm-9 col-lg-7 widget-right">
                                    <div className="large">25.2k</div>
                                    <div className="text-muted">Ads Vistos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Profile;