import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Bets from './Bets'
import NextBets from './NextBets'
import Wallet from './Wallet'

export default class Content extends Component {
    render(){
        return(
           <div className="container">
				<div className="row">
					<div className="col-md-12">
						<Bets/>
					</div>
					<div className="col-md-6">
						<Wallet/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<NextBets/>
					</div>
					<div className="col-md-6">
						
					</div>
				</div>
			</div>
        )
    }
}