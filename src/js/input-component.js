import React, { Component } from "react"

export class Input extends Component {
	constructor(props){
		super(props)
		this.state = {
			value : "",
			placeholder: "Search for TV show"
		}
		
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event){
		console.log("Submitted", this.state.value)
		event.preventDefault()

		this.props.callBack(this.state.value)
	}

	render() { 
		return (
			<form className="offset-md-3" onSubmit={this.handleSubmit}>
				<label>
					<input 
						type="text" 
						autoComplete="true" 
						placeholder={this.state.placeholder} 
						value={this.state.value}
						onChange={this.handleChange}/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Input