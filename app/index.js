import "../styles.css"
import ReactDOM from "react-dom"
import React from "react"
import TestContainer from "./components/container/TestContainer"

const el = document.createElement("div")
el.innerHTML = "This is my shiiii"
document.body.appendChild(el)
const appDiv = document.querySelector(".REACT")
ReactDOM.render(<TestContainer />, appDiv)
