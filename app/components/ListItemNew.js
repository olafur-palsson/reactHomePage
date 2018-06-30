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

  componentWillMount() {
    this.setClass(false)
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

          <input
            type='checkbox'
            className='hidden'
          />

          <input
            type='text'

            onChange={(event) => {
              this.showRest(event)
              this.form(event)
            }}
            name='formText'
          />
          <br/>
          <input
            type='checkbox'
            checked={this.state.formDefault}
            className={this.state.formVisibility ? '' : 'displayNone' }
            name='formDefault'
            onChange={this.form}
          />
          <p
            className={this.state.formVisibility ? '' : 'displayNone' }
          >Checked by Default</p>

          <input
            type='submit'
            className={this.state.formVisibility ? '' : 'displayNone' }
            onClick={this.sendUpdate.bind(this)}
          />

        </form>
      </li>
    )
  }
}
