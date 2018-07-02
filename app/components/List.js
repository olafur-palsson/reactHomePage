import React from "react";
import ListItem from "./ListItem"
import ListItemNew from "./ListItemNew"

export default class List extends React.Component {
	constructor() {
		super()
		this.size = 0
		this.state = { modifiable: false }
	}

  newItemListItem() {
    return(<ListItemNew
			currentSize={this.size}
      key='newOne'
      name='new'
      default='false'
      lastStatusUpdate='2018-1-1'
      lastStatus='false'
      path={this.props.path}
    />)
  }

  li(list, key) {
		const order = list.order ? list.order : 4444
    return (<ListItem
			modifiable       = {this.state.modifiable}
      key              = {key}
			data 				   	 = {list}
			orderNumber      = {list.order}
      name             = {list.name}
      default          = {list.default}
      lastStatusUpdate = {list.since}
      lastStatus       = {list.status}
      path             = {this.props.path + "." + key}
    />)
  }

	//basically held eg ad eg verdi ad
	//hafa order a hverjum einasta og sidan
	//uppfaera alla

	//eg er samt ad paela, thad verdur jafn morg request og
	//fjoldi item-a a listanum svo thad verdur alls ekki efficient
	//nema kannski madur myndi taka allan listann og vera med "fix order"

	//listinn er eftir allt saman a "List.js" svo thad aetti ekki ad
	//vera of mikid ves thegar madur er kominn inn i thetta.

	//held ad thad se besta approachid

	//TODO:
	//Drag and drop re-ordering
	//Editing mode to view the delete button and to modify the 'default'
	//option
	//Later add a profile for each

	modifyBoxClick(e) {
		this.setState({ modifiable: !this.state.modifiable })
	}

  renderListItems() {
    const regex = /^[$]/
    const setupData = this.props.listData
    let li_Array = []
		this.size = Object.keys(setupData).length
    for(let key in setupData) {
      if(key.match(regex)) continue
      const setup = setupData[key]
      li_Array.push(this.li(setup, key))
    }
		li_Array.sort((a, b) => {
			const numA = a.props.orderNumber
			const numB = b.props.orderNumber
			if(numA < numB) return -1
			if(numA > numB) return 1
			return 0
		})
    return li_Array
  }

  render() {
    return(
      <div className="todoList">
          <div className="listHeader">
						<h1> {this.props.listData.$name} </h1>
						Modify
						<input
							type="checkbox"
							onChange={this.modifyBoxClick.bind(this)}
							checked={this.state.modifiable}
							value={this.state.modifiable}
						/>
					</div>
          <ol>
            {this.renderListItems()}
            {this.newItemListItem()}
          </ol>
      </div>
    )
  }
}
