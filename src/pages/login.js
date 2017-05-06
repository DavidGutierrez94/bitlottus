import React, { Component } from 'react';

import Api from './api';
export default class login extends Component {

	render() {

	
		return (
			<div>
			<div className="row">
			<div className="panel col-md-2 col-md-offset-1 custom"></div>
			</div>
				<div className="row col-md-ofset-2">
					<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
						<div className="login-panel panel panel-default">
							<div className="panel-heading">Log in</div>
							<div className="panel-body">
								<form role="form">
									<fieldset>
										<div className="form-group">
											<input className="form-control" placeholder="E-mail" name="email" type="email" autofocus=""></input>
										</div>
										<div className="form-group">
											<input className="form-control" placeholder="Password" name="password" type="password"></input>
										</div>

										<a href="#navBar" className="btn btn-primary col-md-offset-10">Login</a>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/*<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-default" >
							<div className="panel-heading" >

							</div>
							<div className="panel-body" >
								<Api />
							</div>
						</div>
					</div>
				</div>*/}
				<div className="col-xs-6 col-md-3">
				<div className="panel panel-default">
					<div className="panel-body easypiechart-panel">
						<h4>Label:</h4>
						<div className="easypiechart" id="easypiechart-teal" data-percent="50" ><span className="percent">50%</span>
						</div>
					</div>
				</div>
			</div>
			</div>
								

		);
	};

}