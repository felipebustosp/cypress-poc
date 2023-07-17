const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { config } = require('cypress/types/bluebird');
module.exports = (on,config) => {
    addMatchImageSnapshotPlugin(on, config);
    return config;
}