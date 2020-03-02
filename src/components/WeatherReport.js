import React from 'react';
import WeatherConditions from './WeatherConditions';

const WeatherReport = props => {
	const { cityResponse } = props.data

	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {cityResponse.name} is {Math.round(cityResponse.main.temp)} &deg; C right now, with a humidity of {cityResponse.main.humidity} %.</h5>

					<WeatherConditions conditions={cityResponse.weather} />
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
