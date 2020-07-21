import React, { Component } from 'react';
import classes from './App.css';
import MyWeather from './containers/MyWeather/MyWeather';
import Layout from './hoc/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Layout>
					<MyWeather />
				</Layout>
			</div>
		);
	}
}

export default App;
