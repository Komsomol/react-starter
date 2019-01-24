import React, { Component } from "react"

class ImageHandler extends Component{
	render(){ 
		console.log(this.props.src)
		if(this.props.src == null){
			return (<p>No Image</p>)
		} else {
			return (<img src={this.props.src.medium} />)
		}
	}
}

class Item extends Component {
	constructor(props){
		super(props)
		this.state = {
			data : this.props.data,
			name: this.props.name
		}
	}
	
	render() {
		let dataSet = this.state.data
		if(dataSet.length == 0){
			return (
				<div>
					<p>No results for {this.state.name} </p>
				</div>
			)
		} else {
			return (
				<ul>
					{
						dataSet.map(function(item, index){
							console.log(item.show.image)
							if(item.show.officialSite){
								return(
									<li key={item.show.id}>
										<h4><a target="_blank" href={item.show.officialSite}>{item.show.name}</a></h4>
										<ImageHandler src={item.show.image} />
										<p>{item.show.summary}</p>

									</li>
								)
							} else {
								return(
									<li key={item.show.id}>
										<h4>{item.show.name}</h4>
										<ImageHandler src={item.show.image} />
										<p>{item.show.summary}</p>
									</li>
								)
							}
						})
					}
				</ul>
			)

		}
	}
}
 
export default Item