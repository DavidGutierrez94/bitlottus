import React, { Component } from 'react';

export default class api extends Component {
    	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			tracksArray: []
		}

	}
	componentDidMount() {
		const apiKey = '3c983bfcf1eac7178da5cbe1ece092b8'
		const defaultURL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=' + apiKey + '&format=json'
		fetch(defaultURL, {
			method: 'GET',
			header: {
				accept: 'application/json'
			}
		})
			.then(response => (response.json()))
			.then(data => {
				this.setState({
					tracksArray: data.tracks.track
				})
				console.log(data.tracks.track[0])
			})
		console.log(defaultURL)
	}
    render() {
        		let tracksArray = this.state.tracksArray
		let showTracks = tracksArray.map((track, index) => {
			return <div key={index} className="col-md-4">
				<div className="row">
					<div className="artist-container">
						<div className="artist-name">
							{track.name}
						</div>
						<div className="artist-mage">
							<img src={track.image[2]['#text']} className='img-responsive'/>
						</div>
					</div>
				</div>
			</div>
		})
        return (
            <div>
                {showTracks}
            </div>
        );
    }
}