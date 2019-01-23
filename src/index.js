console.log("index.js called")

import React, { Component } from "react"
import ReactDOM from "react-dom"
import { APIGetter } from "./js/api-getter"

export default class Index extends Component {
	constructor(props){
		super(props)
		this.state = {
			showname:null
		}

		this.handleReturn = this.handleReturn.bind(this)
	}
	
	handleReturn(data){
		console.log("passed data is", data) 
		
		this.setState({
			showname:data
		})
	}

	render() {
		if(this.state.showname) {
			return (
				<div>
					<APIGetter name={this.state.showname} />
				</div>
			)
		} else {
			return (
				<div>
					<Input callBack={this.handleReturn}/>
				</div>
			)
		}
	}
}

class Input extends Component {
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
			<form onSubmit={this.handleSubmit}>
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
 

ReactDOM.render(<Index/>, document.getElementById("app"))