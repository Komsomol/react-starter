import React, { Component } from "react"
import Item from "./item-render"

export class Find extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			data: null
		}
	}

	componentWillMount(){
		this.apiCall()
	}

	apiCall(){
				
		this.setState({
			loading:true
		})
		const url = `https://api.tvmaze.com/search/shows?q=${this.props.name}`

		fetch(url)
			.then( response => response.json())
			.then( json => {

				this.setState({
					searched: this.props.name,
					data : json,
					loading:false
				})
			})
			.catch( error => console.error(error))
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.name !== prevProps.name){
			this.apiCall()
		}
	}


	render() {
		const info = this.state.data

		if(this.state.loading){
			return (<p> Loading </p>)
		} else {
			return (
				<div>
					<Item name={this.props.name} data={info} />
				</div>
			)
		}
	}
}

export default Find
