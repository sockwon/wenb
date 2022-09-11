class QueryResultSet {
	constructor(result) {
		console.log(result)
		this.result = result
	}

	fetchAll() {
		return this.result;
	}

 	fetchOne() {
		const [row] = this.result;

		return row
	}

 	getLastInsertedId() {
		return this.result.insertId;
	}

	getUpdatedRows() {
		return this.result.affectedRows;
	}

	isExist() {
		console.log("queryset: OK!")
		return Object.values(this.result[0])[0] === '0' ? false : true
	}

}

class Database {
	constructor(db) {
		this.db = db
	}

	async query(query, params) {
		const result = await this.db.query(query, params)

		return new QueryResultSet(result)
	}
}

module.exports =Database