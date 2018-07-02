import React from "react"
import List from "./components/Daily/List"
import Database from "./Database"
import Welcome from "./components/Welcome"

const $db = new Database()
let lists = $db.getLists()
console.log(lists)

export default class Body extends React.Component {
  constructor() {
    super()
    this.renderAsyncList = this.renderAsyncList.bind(this)
    this.state = {
			data: {},
			editingSwitch: false
		}
  }

	deleteListItem() {

	}

	updateListItem() {

	}

	enableEditing() {
		this.setState({editingSwitch: !this.state.editingSwitch})
	}

  componentWillMount() {
    lists.then(doc => {
      const data = doc.data()
      this.setState({data})
    })
  }

  newList(name) {
    return <List key={name} modifiable={this.state.editingSwitch} path={name} listData={this.state.data[name]} />
  }

  renderAsyncList() {
    let array = []
    for(let listName in this.state.data) {
      array.push(this.newList(listName))
    }
    return array
  }

  render() {
    return(
      <div>
        <Welcome string="Remember to write shitty code <3 -Óli :)"/>
        <div className="listHolder">
          { this.renderAsyncList() }
        </div>
      </div>

    )
  }
}
