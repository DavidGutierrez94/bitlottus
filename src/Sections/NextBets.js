import React, { Component } from 'react'


export default class NextBets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: '7d 0h 0m 0s'
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        let countDownDate = new Date("May 15, 2017 00:00:00").getTime();

        // Update the count down every 1 second
        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        // Display the result in the element with id="demo"
        this.setState({
            timeLeft: time
        })
        
        // If the count down is finished, write some text 


    }

    // setInterval(tick)
    render() {


        let leftT = this.state.timeLeft


        return (

            <div>
                <div className="panel panel-default">
                    <div className="container display timer">
                        <span className="time"></span>
                        <span className="timeType"><h2>El proximo sorteo sera en: </h2></span>
                    </div>
                    <div className='panel-body'>
                        <h2 >{leftT}</h2>
                    </div>
                </div>
            </div>
        )
    }
}