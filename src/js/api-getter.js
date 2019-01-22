import React, { Component } from "react"

export class APIGetter extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			data: null
		}
	}

	componentWillMount(){
		const url = "https://www.reddit.com/r/cats.json"

		this.setState({
			loading:true
		})

		fetch(url)
			.then( response => response.json())
			.then( json => {
				this.setState({
					data : json.data.children,
					loading:false
				})
			})
			.catch( error => console.error(error))
	}

	render() {
		console.log(this.state.loading)
		const info = this.state.data

		if(this.state.loading){
			return (<p> Loading </p>)
		} else {
			return (
				<ul>
					{
						info.map(function(item, index){
							console.log(item.data)
							return(
								<li>
									<a href={item.data.url}>{item.data.title}</a>
								</li>
							)
						})
					}
				</ul>
			)
		}
	}
}

export default APIGetter
