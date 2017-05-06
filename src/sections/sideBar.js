import React, { Component } from 'react';

export default class sideBar extends Component {

    render() {
        return (
            <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
                <form role="search">
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"></input>
                    </div>
                </form>
                <ul className="nav menu">
                    <li className="active"><a href="index.html"><svg className="glyph stroked dashboard-dial"><use xlinkHref="#stroked-dashboard-dial"></use></svg> Dashboard</a></li>
                    <li><a href="widgets.html"><svg className="glyph stroked calendar"><use xlinkHref="#stroked-calendar"></use></svg> Widgets</a></li>
                    <li><a href="charts.html"><svg className="glyph stroked line-graph"><use xlinkHref="#stroked-line-graph"></use></svg> Charts</a></li>
                    <li><a href="tables.html"><svg className="glyph stroked table"><use xlinkHref="#stroked-table"></use></svg> Tables</a></li>
                    <li><a href="forms.html"><svg className="glyph stroked pencil"><use xlinkHref="#stroked-pencil"></use></svg> Forms</a></li>
                    <li><a href="panels.html"><svg className="glyph stroked app-window"><use xlinkHref="#stroked-app-window"></use></svg> Alerts &amp; Panels</a></li>
                    <li><a href="icons.html"><svg className="glyph stroked star"><use xlinkHref="#stroked-star"></use></svg> Icons</a></li>
                    <li className="parent "><a href="#"><span data-toggle="collapse" href="#sub-item-1"><svg className="glyph stroked chevron-down"><use xlinkHref="#stroked-chevron-down"></use></svg></span> Dropdown</a>
                        <ul className="children collapse" id="sub-item-1">
                            <li><a className="" href="#"><svg className="glyph stroked chevron-right"><use xlinkHref="#stroked-chevron-right"></use></svg> Sub Item 1</a></li>
                            <li><a className="" href="#"><svg className="glyph stroked chevron-right"><use xlinkHref="#stroked-chevron-right"></use></svg> Sub Item 2</a></li>
                            <li><a className="" href="#"><svg className="glyph stroked chevron-right"><use xlinkHref="#stroked-chevron-right"></use></svg> Sub Item 3</a></li>
                        </ul>
                    </li>
                    <li role="presentation" className="divider"></li>
                    <li><a href="#"><svg className="glyph stroked male-user"><use xlinkHref="#stroked-female-user"></use></svg> Login Page</a></li>
                </ul>
               
            </div>
        );
    };
}