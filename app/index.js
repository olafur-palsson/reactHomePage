import "../styles.css"
import ReactDOM from "react-dom"
import React from "react"
import TestContainer from "./components/container/TestContainer"
import Body from "./Body"





class Application extends React.Component {
  render() {
    return (<Body />)
  }
}


const location = document.querySelector("#app")
const app = <Application />
ReactDOM.render(app, location)


/*
<div class="study-list">
  <h3>Skóli</h3>
</div>
<div class="longTerm"></div>

<div class="life-list">
  <h3>Life</h3>
  <img id="loadingLife" src="http://www.ifmo.ru/images/loader.gif">
</div>


<div id="app" class="REACT">

</div>

*/
