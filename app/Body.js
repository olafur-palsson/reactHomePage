import React from "react"
import List from "./components/Daily/List"
import Database from "./Database"
import Welcome from "./components/Welcome"

const $db = new Database()
let lists = $db.getLists()

export default class Body extends React.Component {
  constructor(props) {
    super(props)
    this.renderAsyncList = this.renderAsyncList.bind(this)
    this.state = {
			data: {},
      newListMode: false
		}
  }

  loadDataFromDatabase() {
    let lists = $db.getLists()
    lists.then(doc => {
      const data = doc.data()
      this.setState({data})
    })
  }

  componentWillMount() {
    this.loadDataFromDatabase()
  }

  newList(name) {
    return <List
      key={name}
      modifiable={this.state.editingSwitch}
      path={name}
      listData={this.state.data[name]}
      update={this.loadDataFromDatabase.bind(this)}
    />
  }

  renderAsyncList() {
    let array = []
    for(let listName in this.state.data) {
      array.push(this.newList(listName))
    }
    return array
  }

  newListMode() {
    this.setState({ newListMode: true })
  }

  addNewList(e) {
    e.preventDefault()
    const nameOfList = e.target.newListName.value
    let listkey = nameOfList.toLowerCase()
    listkey = listkey.split(' ').join('')
    const listObject = {$name: nameOfList}
    $db.update($db.paths.lists, listkey, listObject)
  }

  render() {
    return(
      <div>
        <Welcome string="Remember to write shitty code <3 -Óli :)"/>
        <button
          className={this.state.newListMode ? 'displayNone' : ''}
          onClick={this.newListMode.bind(this)}
        >Add list</button>
        <form className={this.state.newListMode ? "" : "displayNone"} onSubmit={this.addNewList.bind(this)}>
          <input name='newListName' type='text'/>
        </form>
        <div className="listHolder">
          { this.renderAsyncList() }
        </div>
      </div>

    )
  }
}
