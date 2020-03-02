import React from 'react'

const WeatherConditions = props => {
	const weatherCondition = props.conditions.map(condition => {
		return condition.description
	})

	return (
		<div>
			<h6>Current weather is:</h6>
			<p>{weatherCondition}</p>
		</div>
	)
}

export default WeatherConditions