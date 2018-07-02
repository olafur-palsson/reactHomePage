import React from "react";
import DBCComponent from '../DatabaseConnectedComponent'
import ListItem from "./ListItem"
import ListItemNew from "./ListItemNew"

export default class List extends DBCComponent {
	constructor(props) {
		super(props)
		this.state = {
			modifiable: false,
		  size: 0
		}
	}

  newItemListItem() {
    return(<ListItemNew
			update={this.props.update}
			currentSize={this.state.size}
      key='newOne'
      name='new'
      default='false'
      lastStatusUpdate='2018-1-1'
      lastStatus='false'
      path={this.props.path}
    />)
  }

	delete() {
		this.updateDB(this.props.path, "DEL")
	}

  li(list, key) {
		const order = list.order ? list.order : 4444
    return (<ListItem
			update           = {this.props.update}
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

	fixOrderNumbers(setupData) {
    const regex = /^[$]/
		let array = []
		for(let key in setupData) {
			if(key.match(regex)) continue
			let data = setupData[key]
			data["key"] = key
			array.push(setupData[key])
		}
		array.sort((a, b) => {
			if(a.order > b.order) return 1
			if(a.order < b.order) return -1
			return 0
		})
		let i = 1
		array = array.map(el => { el.order = i++; return el })
		return array
	}

  renderListItems() {
    const setupData = this.props.listData
		this.size = Object.keys(setupData).length
		const dataArray = this.fixOrderNumbers(setupData)
    return dataArray.map(data => this.li(data, data["key"])
		)
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
						<button
							onClick={this.delete.bind(this)}
							className={this.state.modifiable ? '' : 'displayNone'}
						>DELETE</button>

					</div>
          <ol>
            {this.renderListItems()}
            {this.newItemListItem()}
          </ol>
      </div>
    )
  }
}
