import React from "react";
import ListItem from "./ListItem"
import ListItemNew from "./ListItemNew"

export default class List extends React.Component {
	constructor() {
		super()
		this.size = 0
	}

  newItemListItem() {
    return(<ListItemNew
			currentSize={this.size}
      key='newOne'
      name='new'
      default='false'
      lastStatusUpdate='2018-1-1'
      lastStatus='false'
      path='NA'
    />)
  }

  li(list, key, orderNumber) {
    return (<ListItem
        key              = {key}
				orderNumber     = {orderNumber}
        name             = {list.name}
        default          = {list.default}
        lastStatusUpdate = {list.since}
        lastStatus       = {list.status}
        path             = {this.props.path + "." + key}
      />)
    }

  renderListItems() {
    const regex = /^[$]/
    const setupData = this.props.listData
    let li_Array = []
		this.size = Object.keys(setupData).length
		let orderNumber = 1
    for(let key in setupData) {
      if(key.match(regex)) continue
      const setup = setupData[key]
      li_Array.push(this.li(setup, key, orderNumber))
			orderNumber++
    }
    return li_Array
  }


  render() {
    return(
      <div className="todoList">
          <h1> {this.props.listData.$name} </h1>
          <ol>
            {this.renderListItems()}
            {this.newItemListItem()}
          </ol>

      </div>
    )
  }
}
