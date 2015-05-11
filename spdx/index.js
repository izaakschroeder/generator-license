
var generators = require('yeoman-generator');
var licenses = require('spdx-license-list/spdx-full');
var _ = require('lodash');

module.exports = generators.Base.extend({
	initializing: function() {
		var pkg = this.fs.read(this.destinationPath('package.json'));
		pkg = JSON.parse(pkg);
		this.license = pkg.license;
	},
	prompting: function () {
		var done = this.async();
		this.prompt({
			type: 'list',
			name: 'license',
			message: 'Your project license',
			choices: _.keys(licenses),
			filter: function(key) { return licenses[key]; },
			default: this.license
		}, function (answers) {
			this.license = answers.license;
			done();
		}.bind(this));
	},
	writing: function() {
		var text = this.license.license;
		this.fs.write(this.destinationPath('LICENSE.md'), text);
	}
});
