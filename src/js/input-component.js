import React, { Component } from "react"

const InputComponent = (props) =>{
	console.log(props)
	return (
		<form className="offset-md-3" onSubmit={props.onSubmit}>
			<label>
				<input 
					type="text" 
					autoComplete="true" 
					placeholder={props.placeholder} 
					value={props.value}
					onChange={props.onChange}/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	)
}

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
			<InputComponent 
				onSubmit={this.handleSubmit}
				onChange={this.handleChange}
				placeholder={this.state.placeholder} 
				value={this.state.value}
			/>
		)
	}
}

export default Input