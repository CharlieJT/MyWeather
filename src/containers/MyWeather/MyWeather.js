import React, { Component } from 'react';
import axios from 'axios';

class MyWeather extends Component {
    componentDidMount () {
		
		const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
		.then(res => {
			console.log(res.data);
		}).catch(error => {
			console.log(error.response)
		})
	}
	render() {
		console.log(process.env.REACT_APP_WEATHER_API_KEY);
		console.log("is this working")
		return (
			<div className="App">
				<h2>Hey There</h2>
			</div>
		);
	}
}

export default MyWeather;