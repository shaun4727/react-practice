import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.tick();
		}, 1000);
	}
	tick() {
		this.setState({
			date: new Date(),
		});
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<h1>
				<span className="text">{this.state.date.toLocaleTimeString()}</span>
			</h1>
		);
	}
}

export default Clock;
