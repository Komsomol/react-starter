import React, { Component } from "react";

export class APIGetter extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    componentWillMount(){

    };

    render() {
        return (
            <p> {this.props.name}</p>
        )
    }
}

export default APIGetter;
