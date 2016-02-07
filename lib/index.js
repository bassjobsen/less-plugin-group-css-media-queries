var getGroupProcessor = require("./group-css-media-queries-processor"),
    usage = require("./usage");

function LessPluginGroupMediaQuery() {}

LessPluginGroupMediaQuery.prototype = {
    install: function(less, pluginManager) {
		var GroupProcessor = getGroupProcessor(less);
        pluginManager.addPostProcessor(new GroupProcessor());
    },
    printUsage: function () {
        usage.printUsage();
    },
    minVersion: [2, 0, 0]
};

module.exports = ;
