import React, { Component } from 'react'


export default class Wallet extends Component {
    constructor(props){
        super(props)
        this.state={
                userID:0,
                address:"M4r1oE5r3h0m053xSu4l"
        }
    }
   /* componetWillMount(){
        let BlockIo = require('block_io')
        let version =2
        let block_io = new BlockIo('242a-3128-f91e-b5f9','DA1032VI467745D',version)
        let data = block_io.get_new_address({'label':'chimuelo'})
        console.log(data)
        this.setState({
            address:data.data.address
        })
    }*/
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className='panel-heading'>
                        Wallet
                    </div>
                    <div className='panel-body'>
                    <label>Address: </label>
                    <div>{this.state.address}</div>
                    <label>Amount: </label>
                    <div><imput type='text' className='form-control' placeholder="0.00"></imput>
                    </div>
                    <div className='row'>
                    <a href="#/Home" className="btn btn-default col-sm-offset-4">deposit</a>
                    <a href="#/Home" className="btn btn-default col-sm-offset-1">withdraw</a>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}