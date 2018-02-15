import React from "react";
import ListItem from "./ListItem"

export default class List extends React.Component {

  li(listItemSetup, key){
    return <ListItem
        key              = {key}
        name             = {listItemSetup.name}
        default          = {listItemSetup.default}
        lastStatusUpdate = {listItemSetup.since}
        lastStatus       = {listItemSetup.status}
        path             = {this.props.path + "." + key}
      />
    }

  renderListItems() {
    const regex = /^[$]/
    const setupData = this.props.listData
    let li_Array = []

    for(let key in setupData) {
      if(key.match(regex)) continue
      const setup = setupData[key]
      li_Array.push(this.li(setup, key))
    }

    return li_Array
  }

  render() {
    return(
      <div className="todoList">
          <h1>{this.props.listData.$name}</h1>
          <ol>
            {this.renderListItems()}
          </ol>
      </div>
    )
  }
}
