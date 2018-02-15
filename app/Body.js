import React from "react"
import List from "./components/List"
import Database from "./Database"
import Welcome from "./components/Welcome"

const $db = new Database()
let lists = $db.getLists()
console.log(lists)

export default class Body extends React.Component {
  constructor() {
    super()
    this.bindToDOM = this.bindToDOM.bind(this)
    this.renderAsyncList = this.renderAsyncList.bind(this)
    this.state = {}
    this.state.data = {}
  }

  bindToDOM(element) {
    ReactDOM.render(element.render(), document.getElementById("app"))
  }

  componentWillMount() {
    lists.then(doc => {
      const data = doc.data()
      this.setState({data})
    })
  }

  renderAsyncList() {
    let array = []
    for(let listName in this.state.data) {
      array.push(<List
        key ={listName}
        path={listName}
        listData={this.state.data[listName]}
      />)
    }
    return array
  }

  render() {
    return(
      <div>
        <Welcome string="Remember to write shitty code <3 -Óli :)"/>
        {this.renderAsyncList()}
      </div>

    )
  }
}
