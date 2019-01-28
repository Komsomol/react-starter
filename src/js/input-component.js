import React, { Component } from "react"

const InputComponent = (props) =>{
	return (
		<form className="form-inline" onSubmit={props.onSubmit}>
			<div className="form-group mx-sm-3 mb-2">
				<input 
					className="form-control"
					type="text" 
					autoComplete="true" 
					placeholder={props.placeholder} 
					value={props.value}
					onChange={props.onChange}/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>

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