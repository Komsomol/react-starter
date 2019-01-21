console.log("It lives");

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { APIGetter } from "./js/api-getter";

export default class Index extends Component {
  render() {
    return (
      <div>
        <APIGetter name="The Wire" />
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById("app"));