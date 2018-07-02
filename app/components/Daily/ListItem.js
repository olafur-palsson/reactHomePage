import React from 'react'
import Database from '../../Database'

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state              = {}
    this.Database           = new Database()
    this.state.status       = (this.getStatusFromDb())
  }

  componentWillMount() {
    this.setClass(this.state.status)
  }

  getStatusFromDb() {
    const isOK = this.Database.isToday(this.props.lastStatusUpdate) ?
      this.props.lastStatus : false
    return isOK || this.props.default
  }

  updateDB(thePath, theValue) {
    this.Database.update(this.Database.paths.lists, thePath, theValue)
  }

  setClass(isChecked) {
    const checked = isChecked ? ' isChecked':''
    this.setState({class: 'listItem' + checked})
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
            {this.props.name}
          </div>
				  <button
            className={this.props.modifiable ? "" : "displayNone"}
            onClick={this.delete.bind(this)}
          >
            Del
          </button>
        </div>
      </li>
    )
  }
}
