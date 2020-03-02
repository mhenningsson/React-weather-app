import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import Axios from 'axios';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		search: '',
		cityDisplay: '',
		cityResponse: '',
	}
	
	getWeatherAPI = (search) => {
		Axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f')
		.then(response => {
			if (response.status === 200) {
				this.setState({
					report: true,
					cityResponse: response.data,
				})
			} else {
				this.renderError()
			}
		})
		.catch(err => {
			this.renderError()
			console.error('error', err.response)
		})
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.getWeatherAPI(this.state.search)
		this.setState({
			errorMessage:false,
			cityDisplay: this.state.search,
			search: '',
			
		})
	}

	renderError = () => {
		this.setState({
			errorMessage: true,
			report: null,
		})
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity 
						data={this.state}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						/>

					{
						this.state.report
						? (
							<WeatherReport 
								data={this.state} />
						)
						: ''
					}

					{
						this.state.errorMessage
						? (
							<div className="alert alert-warning" role="alert">
  								Something went wrong. Are you sure the place "{this.state.cityDisplay}" exists?
							</div>
						)
						: ''
					}

				</div>
			</div>
		)
	}
}

export default App;
