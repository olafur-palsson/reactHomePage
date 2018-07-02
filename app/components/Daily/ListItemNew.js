import ListItem from "./ListItem"
import ListBean from "../ListBean"
import React from 'react'

export default class ListItemNew extends ListItem {

  constructor(props) {
    super(props)
    this.state.formVisibility = false
    this.state.formDefault = false
    this.showRest = this.showRest.bind(this)
    this.form = this.form.bind(this)
  }

  form(event) {
    const target = event.target
    const name = target.name
    const value = target.type == 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  showRest(onChangeEvent) {
    const inputText = onChangeEvent.target.value
    const shouldBeVisible = inputText != ''
    this.setState({ formVisibility: shouldBeVisible })
  }

  sendUpdate(event) {
    event.preventDefault()
    console.log(this.state)
    let listObject = {}
    listObject.name = this.state.formText
    listObject.default = this.state.formDefault
    listObject.order = this.getSerial()
    listObject.status = false
    listObject.since = "2018-1-1"
    this.addToDB(listObject)
  }

  getSerial() {
    const now = new Date()
    return now.getTime()
  }

  componentWillMount() {
    this.setClass(false)
  }

	addToDB(listObject) {
    const uniqueID = this.getSerial() + ""
    console.log(listObject)
    console.log(this.props.path)
		this.updateDB(this.props.path + '.' + uniqueID, listObject)
	}

  render() {
    return(
      <li>
        <form className={this.state.class}>
          <div className="listItemNewForm">
            <input
              type='text'
              onChange={(event) => {
              this.showRest(event)
                this.form(event)
              }}
              name='formText'
            />
            <div className={this.state.formVisibility ? 'listItemNew' : 'displayNone' }>
              <input
                type='checkbox'
                checked={this.state.formDefault}
                name='formDefault'
                onChange={this.form}
              />
              <p>Checked by Default</p>
              <input
                type='submit'
                onClick={this.sendUpdate.bind(this)}
              />
            </div>
          </div>
        </form>
      </li>
    )
  }
}
