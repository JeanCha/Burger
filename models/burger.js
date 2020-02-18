// Dependencies
var orm = require("../config/orm.js");

// Pass in query parameters as required by ORM and also a callback to receive data
var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(burgerName, cb) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			cb(res);
		});
	},
	updateOne: function(burgerId, cb) {
		orm.updateOne("burgers", "devoured", 1, "id", burgerId, function(res) {
			cb(res);
		});
	}
};

// Export
module.exports = burger;