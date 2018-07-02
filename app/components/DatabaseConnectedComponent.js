import React from 'react'
import Database from '../Database'

export default class DBCComponent extends React.Component {
  constructor(props) {
    super(props)
    this.Database = new Database()
  }

  updateDB(thePath, theValue) {
    this.Database.update(this.Database.paths.lists, thePath, theValue)
    this.props.update()
  }
}
