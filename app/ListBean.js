export default class ListBean {
	constructor() {
		this.default = true
		this.name = "Name Undefined"
		this.since = "2018-06-06"
		this.status = false
		this.numberOnList = 0
		this.copy = this.copy.bind(this)
	}

	copy() {
		let lb = new ListBean()
		lb.default = this.default
		lb.name = this.name
		lb.since = this.since
		lb.status = this.status
		lb.numberOnList = this.numberOnList
	}
}
