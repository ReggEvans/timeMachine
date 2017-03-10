import React from 'react'

var HomePage = React.createClass({

	_increaseYear: function() { 
		this.setState({
			position:'forward'
			})
		var updateToTheFirst = function() {
			if(this.state.position === 'forward') {
				var updater = this.setState({
					year: this.state.year + 1
				})
			}
			else {
				clearInterval(interval)
			}
		}
		var interval = setInterval(updateToTheFirst.bind(this),1000)
	},

	_stopYear: function() { 
		this.setState({
			position:'stop'
			})
	},

	_decreaseYear: function() {
		this.setState({
			position:'back'
			})
		var updateToThePast = function(){
			if(this.state.position === 'back'){
				var updater = this.setState({
					year: this.state.year - 1
				})
			}
			else{
				clearInterval(interval)
			}
		}
		var interval = setInterval(updateToThePast.bind(this),1000)
	},

	getInitialState: function(){
		return {
			position: 'stop',
			year: 2017
		}
	},

	render: function(){
		return (
			<div className='wrapper'>
				<h1>Time Machine</h1>
				<div className='clock'>
					<div className='digital-display'>
						<h2>{this.state.year}</h2>
					</div>
					<div className='buttons'>
						<button className="decrease" onClick={this._decreaseYear}></button>
						<button className="stop"  onClick={this._stopYear}></button>
						<button className="increase"  onClick={this._increaseYear}></button>
					</div>
				</div>
			</div>
			)
	}
})

export default HomePage