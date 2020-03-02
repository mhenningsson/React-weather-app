import React from 'react'

class WeatherConditions extends React.Component {
	render() {
		const { conditions } = this.props
		
		const weatherCondition = conditions.map(condition => {
			return condition.description
		})

		return (
			<div>
				<h6>Current weather is:</h6>
				<p>{weatherCondition}</p>
			</div>
		)
	}
}

export default WeatherConditions