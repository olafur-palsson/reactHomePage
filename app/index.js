import "../styles.css"
import ReactDOM from "react-dom"
import React from "react"
import Body from "./Body"

class Application extends React.Component {
  render() {
    return (<Body />)
  }
}

const location = document.querySelector("#app")
const app = <Application />
ReactDOM.render(app, location)
