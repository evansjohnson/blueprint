/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

const { createKarmaConfig } = require("@blueprintjs/karma-build-scripts");

module.exports = function (config) {
    const baseConfig = createKarmaConfig({
        dirname: __dirname,
        coverageOverrides: {
            "src/cell/cell*": {
                lines: 70,
            },
            "src/common/clipboard*": {
                lines: 60,
                statements: 60,
            },
            "src/headers/headerCell*": {
                lines: 70,
                statements: 70,
            },
            "src/tableHotkeys*": {
                lines: 70,
                statements: 70,
            },
        },
    });
    config.set(baseConfig);
    config.set({
        // overrides here
    });
};
