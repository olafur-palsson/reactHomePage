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
    this.renderAsyncList = this.renderAsyncList.bind(this)
    this.state = {data: {}}
  }

  componentWillMount() {
    lists.then(doc => {
      const data = doc.data()
      this.setState({data})
    })
  }

  list(name) {
    return <List key={name} path={name} listData={this.state.data[name]} />
  }

  renderAsyncList() {
    let array = []
    for(let listName in this.state.data) {
      array.push(this.list(listName))
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
