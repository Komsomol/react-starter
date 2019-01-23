console.log("index.js called")

import React, { Component } from "react"
import ReactDOM from "react-dom"
import { APIGetter } from "./js/api-getter"
import { Input } from "./js/input-component"

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


 

ReactDOM.render(<Index/>, document.getElementById("app"))