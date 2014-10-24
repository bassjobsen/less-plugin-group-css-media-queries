var grouper = require('group-css-media-queries');

module.exports = function(less) {
	function GroupProcessor() { };
    GroupProcessor.prototype = {
        process: function (css, extra) {
            return grouper(css);
        }
    };

    return GroupProcessor;
};
