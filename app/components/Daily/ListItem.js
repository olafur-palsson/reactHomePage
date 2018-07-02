import React from 'react'
import DBCComponent from '../DatabaseConnectedComponent'
import Database from '../../Database'

export default class ListItem extends DBCComponent {
  constructor(props) {
    super(props)
    this.state              = {}
    this.state.status       = (this.getStatusFromDb())
  }

  componentWillMount() {
    this.setClass(this.state.status)
    this.updateDB(this.props.path, this.props.data)
  }

  getStatusFromDb() {
    const isOK = this.Database.isToday(this.props.lastStatusUpdate) ?
      this.props.lastStatus : false
    return isOK || this.props.default
  }

  setClass(isChecked) {
    const checked = isChecked ? ' isChecked':''
    this.setState({class: 'listItem' + checked})
  }

  displayIfTrueClass(isThisTrue) {
    return isThisTrue ? "" : "displayNone"
  }

  checkboxClick(e) {
    const notStatus = !this.state.status
    this.setState({ status: notStatus })
    let data = this.props.data
    data.status = notStatus
    data.since = this.Database.getDateString()
    data.order = this.props.orderNumber
    this.updateDB(this.props.path, data)
    this.setClass(notStatus)
  }

  nameChange(e) {
    const newName = e.target.value
    let data = this.props.data
    data.name = newName
    this.updateDB(this.props.path, data)
  }

	delete() {
		this.updateDB(this.props.path, "DEL")
	}

  render() {
    return (
      <li>
        <div className={this.state.class}>
          <div>
            <input
              onChange={this.checkboxClick.bind(this)}
              type='checkbox'
              checked={this.state.status}
              value={this.state.status}
            />
            <div className={this.displayIfTrueClass(!this.props.modifiable)}>
              {this.props.data.name}
            </div>
            <input
              className={this.displayIfTrueClass(this.props.modifiable)}
              type="text"
              defaultValue={this.props.data.name}
              onChange={this.nameChange.bind(this)}
            />
          </div>
				  <button
            className={this.displayIfTrueClass(this.props.modifiable)}
            onClick={this.delete.bind(this)}
          >
            Del
          </button>
        </div>
      </li>
    )
  }
}
