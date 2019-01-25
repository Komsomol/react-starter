import React, { Component } from "react"

// Handle images since some return as null
class ImageHandler extends Component{
	render(){ 
		if(this.props.src == null){
			return (<div className="item-no-image"><p>No Image</p></div>)
		} else {
			return (<img src={this.props.src.medium} />)
		}
	}
}

// Handle links since some are null
class LinkHandler extends Component{
	render(){
		if(this.props.href == null){
			return (<h4>{this.props.name}</h4>)
		} else {
			return (<h4><a target="_blank" href={this.props.href}>{this.props.name}</a></h4>)
		}
	}
}

class SummaryHanlder extends Component{
	render (){
		// console.log(this.props.info)
		if(this.props.info == null || this.props.info == ""){
			return <p>No summary available</p>
		} else {
			return <p>{(this.props.info).replace(/<\/?[^>]+(>|$)/g, "")}</p>
		}
	}
}

class CardDisplay extends Component{
	render (){
		// console.log(this.props.dataset)
		return(
			<ul>
				{this.props.dataset.map(function(item, index){
					return(
						<li className="card-holder" key={item.show.id}>
							<LinkHandler href={item.show.officialSite} name={item.show.name} />
							<div>
								<div className="card-item">
									<ImageHandler src={item.show.image} />
									<div>
										<SummaryHanlder info={item.show.summary} />
										<p>First aired on {new Date(item.show.premiered).toDateString()}</p>
										<p>Rating</p>
										<p>{item.show.rating.average}</p>
										<p>Genre</p>
										{item.show.genres.map((gen) => <p key={Math.random(index)}>{gen}</p>)}
									</div>
								</div>
							</div>
						</li>
					)
				})}
			</ul>
		)
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
		if(this.state.data.length == 0){
			return (
				<div>
					<p>No results for {this.state.name} </p>
				</div>
			)
		} else {
			return (
				<CardDisplay dataset={this.state.data}/>
			)

		}
	}
}
 
export default Item