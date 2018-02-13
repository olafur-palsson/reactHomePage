import React from "react";
import ListItem from "./ListItem"

export default class List extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.listData)
    this.getName = this.getName.bind(this)
    this.renderListItems = this.renderListItems.bind(this)
  }

  getName() {
    return this.props.listData.$name
  }

  renderListItems() {
    const regex = /^[$]/
    const setupData = this.props.listData
    console.log("setupData:")
    console.log(setupData)
    let arrayOfListItems = []

    for(let key in setupData) {
      if(key.match(regex)) continue
      const listItemSetup = setupData[key]
      console.log(listItemSetup)
      console.log(this.props)
      arrayOfListItems.push(

        <ListItem
          key=           {key}
          name=          {listItemSetup.name}
          default=       {listItemSetup.default}
          storageSince=  {listItemSetup.since}
          storageStatus= {listItemSetup.status}
          path=          {this.props.path + "." + key}
        />
      )
    }

    return arrayOfListItems
  }

  render() {
    return(
      <div className="todoList">
          <h1>{this.getName()}</h1>
          <ol>
            {this.renderListItems()}
          </ol>
      </div>
    )
  }
}
