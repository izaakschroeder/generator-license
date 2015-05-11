
var generators = require('yeoman-generator');
var _ = require('lodash');
var npm = require('npm');

// Go through dependency graph (if --deep desired)
// Flatten
// Group version compatible dependencies into one
// Check if package contents have LICENSE(\.*)$ file
// If yes, use that verbatim
// If no, check package.json `license` field
// If license is SPDX use SPDX content

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {

	},
	writing: function() {
		npm.commands.view(['lodash^3.8.0'], true, function(err, data) {
			var pkg = _.first(data);
		})
	}
});
