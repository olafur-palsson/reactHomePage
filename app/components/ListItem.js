import React from 'react'
import Database from '../Database'


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
    console.log(`Maybe this helps ${this.props.name} and ${this.props.lastStatus}`)

    const isOK = this.Database.isToday(this.props.lastStatusUpdate) ?
      this.props.lastStatus : false
    return isOK || this.props.default
  }

  updateDB(thePath, theValuealue) {
    this.Database.update(this.Database.paths.lists, thePath, theValuealue)
  }

  setClass(isChecked) {
    const checked = isChecked ? ' isChecked':''
    console.log(checked)
    this.setState({class: 'listItem' + checked})
  }

  checkboxClick(e) {
    const notStatus = !this.state.status
    console.log(notStatus)
    this.setState({ status: notStatus })
    this.updateDB(this.props.path + '.status', notStatus)
    this.updateDB(this.props.path + '.since',  this.Database.getDateString())
    this.setClass(notStatus)
  }

  render() {
    return (
      <li>
        <div className={this.state.class}>
          <input
            onClick={this.checkboxClick.bind(this)}
            type='checkbox'
            checked={this.state.status}
            value={this.state.status}
          />
          {this.props.name}
        </div>
      </li>
    )
  }
}
