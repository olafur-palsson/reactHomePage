



const paths = {
  lists: "homepageSetup/listOfLists"
}

class Database {
  getLists() {
    return this.fstore.doc(paths.lists).get()
  }

  getDateString() {
    let date = new Date()
    let str = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`

    return str
  }

  isToday(dateString) {
    console.log(`${dateString} and ${this.getDateString()} gives us ${dateString == this.getDateString()}`)
    return dateString == this.getDateString()
  }

/** THE UPDATE DATABASE FUNCTION, very powerful
  * @param {string} docPath    Firebase path to use with firestore().doc()
  * @param {string} objectPath Where we in the object we need to inject
  the value
  */
  update(docPath, objectPath, value, debuglog) {
    if(debuglog) console.log(`Dacument Path: ${docPath},
                              Object Path: ${objectPath},
                              Value: ${value}`)

    const docPromise = this.fstore.doc(docPath).get()
    docPromise.then(doc => {
      let data = doc.data()
      let navigator = data //setja navigatorinn efst í skjalið
      let path = objectPath.split(".")
      while(path.length > 1)
        navigator = navigator[path.shift()]

      console.log(value)
      navigator[path.shift()] = value
      this.fstore.doc(docPath).set(data)
    })
    return "Logging was successful"
  }

  load() {
    const downloadLists = {}
    for(let key in paths)
       this.documents[key] = this.fstore.doc(paths[key]).get()
  }

  constructor() {
    this.paths         = paths
    this.documents     = {}
    this.fstore        = firebase.firestore()
    this.getLists      = this.getLists     .bind(this)
    this.update        = this.update       .bind(this)
    this.isToday       = this.isToday      .bind(this)
    this.getDateString = this.getDateString.bind(this)
  }
}


export default Database
