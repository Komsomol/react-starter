import React, { Component } from "react"

class Item extends Component {
	render() { 

		if(this.props.link){
			return (
				<li key={this.props.key}>
					<a href={this.props.link} target="_blank">{this.props.name}</a>
				</li>
			)
		} else {
			return( 
				<li key={this.props.key}>
					<p>{this.props.name}</p>
				</li>
			)
		}

	}
}
 
export default Item