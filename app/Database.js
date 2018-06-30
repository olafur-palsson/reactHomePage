


const paths = {
  lists: "homepageSetup/listOfLists"
}

class Database {
  getLists() {
    const document = this.fstore.doc(paths.lists).get()
    this.storeDocumentInCache(paths.lists, document)
    return document
  }

  set(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  storeDocumentInCache(key, docPromise) {
    docPromise.then(doc => this.set(key, doc.data()))
  }

  getDateString() {
    let date = new Date()
    let str = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`
    return str
  }

  isToday(dateString) {
    return dateString == this.getDateString()
  }

  //objectPath is on form "blabla.key1.key2"
  //heavy-lifting function
  update(docPath, objectPath, keyValue) {
    //breyta í dynamic update

    let data = this.get(docPath)
    let navigator = data //s  etja navigatorinn efst í skjalið
    let path = objectPath.split(".")
    while(path.length > 1)
        navigator = navigator[path.shift()]

		let leafKey = path.shift()
		if(keyValue == "DEL") {
			delete navigator[leafKey]
			console.log("Deleting was successful")
		} else {
    	navigator[leafKey] = keyValue
		}
    this.set(docPath, data)
    this.fstore.doc(docPath).set(data)
    return "Logging was successful"
  }

  load() {
    const downloadLists = {}
    this.getLists()
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
    this.getLists()
  }
}

export default Database
