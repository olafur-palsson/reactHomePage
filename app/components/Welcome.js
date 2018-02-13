import React from "react"

export default class Welcome extends React.Component {

  render() {
    return(
      <div>
        <h1>This is my code bro</h1>
        <h5>{this.props.string}</h5>
      </div>
    )
  }
}
