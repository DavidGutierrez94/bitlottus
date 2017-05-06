import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class BreadCumb extends Component {
  render(){
    return(
      <div>
        <div className="downCrumb">
          <ol className="breadcrumb">
            <li><a href="#"><svg className="glyph stroked home"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#stroked-home"></use></svg></a></li>
            <li className="active">Icons</li>
          </ol>
        </div>
      </div>
    )
  }
}
