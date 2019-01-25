import React from "react"
import ReactDOM from "react-dom"
import css from "./css/main.css"
import { Input } from "./js/input-component"
import { Find } from "./js/find"

class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			searchedText : "",
			fireSearch : false
		}

		this.handleSearchResult = this.handleSearchResult.bind(this)
	}

	handleSearchResult(value){
		this.setState({
			searchedText:value,
			fireSearch: true
		})
	}

	render() { 
		if(this.state.searchedText){
			return ( 
				<div>
					<Input callBack={this.handleSearchResult}/>
					<Find name={this.state.searchedText}/>
				</div>
			)			
		} else {
			return ( 
				<div>
					<Input callBack={this.handleSearchResult}/>
				</div>
			)
		}
	}
}
 
ReactDOM.render(<App />, document.getElementById("app"))