import React from "react"
import Database from "../Database"


export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state              = {}
    this.Database           = new Database()
    this.state.status = (this.Database.isToday(props.storageSince)) ?
      props.storageStatus : false

    console.log(this.state.status)

    this.checkboxClick      = this.checkboxClick.bind(this)
  }

  checkboxClick(e) {
    this.setState({
      status: !this.state.status
    })
    console.log(typeof this.state.status)
    this.Database.update(this.Database.paths.lists, this.props.path + ".status", this.state.status, true)
    this.Database.update(this.Database.paths.lists, this.props.path + ".since", this.Database.getDateString(), true)
  }

  render() {
    return (
      <li>
        <div className="listItem">
          <input onChange={this.checkboxClick} type="checkbox" checked={this.state.status} value={this.state.status} />
          {this.props.name}
        </div>
      </li>
    )
  }
}
