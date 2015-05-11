
var generators = require('yeoman-generator');
var licenses = require('spdx-license-list/spdx-full');
var _ = require('lodash');

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {
		// TODO: Mimick the binpress form
	},
	writing: function() {
		var text = this.license.license;
		this.fs.write(this.destinationPath('LICENSE.md'), text);
	}
});
