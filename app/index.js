
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: function() {
		this.composeWith('license:spdx');
	}
});
