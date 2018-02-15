import React from "react"
import Database from "../Database"


export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state              = {}
    this.Database           = new Database()
    this.state.status       = (this.getStatusFromDb())
  }

  getStatusFromDb() {
    return this.Database.isToday(this.props.storageSince) ?
      this.props.storageStatus : false
  }

  updateDB(path, value) {
    this.Database.update(this.Database.paths.lists, path, value, /*debug*/ true)
  }

  checkboxClick(e) {
    this.setState({ status: !this.state.status })
    this.updateDB(this.props.path + ".status", this.state.status)
    this.updateDB(this.props.path + ".since",  this.Database.getDateString())
  }

  render() {
    return (
      <li>
        <div className="listItem">
          <input
            onChange={this.checkboxClick.bind(this)}
            type="checkbox"
            checked={this.state.status}
            value={this.state.status}
          />
          {this.props.name}
        </div>
      </li>
    )
  }
}
