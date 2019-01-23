import React, { Component } from "react"
import Item from "./item-render"

export class APIGetter extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			data: null
		}
	}

	componentWillMount(){
		const url = `https://api.tvmaze.com/search/shows?q=${this.props.name}`

		this.setState({
			loading:true
		})

		fetch(url)
			.then( response => response.json())
			.then( json => {
				
				console.log(json)

				this.setState({
					data : json,
					loading:false
				})
			})
			.catch( error => console.error(error))
	}

	render() {
		const info = this.state.data

		if(this.state.loading){
			return (<p> Loading </p>)
		} else {
			return (
				<ul>
					{
						info.map(function(item, index){
							console.log(item.show.name)
							return(
								<Item 
									key={item.show.id}
									link={item.show.officialSite}
									name={item.show.name}
								/>
							)
						})
					}
				</ul>
			)
		}
	}
}

export default APIGetter
