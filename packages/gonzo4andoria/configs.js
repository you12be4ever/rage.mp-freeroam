// Configruration Object for holding require from subfolder
let Configurations = {};

//#region --START-- Configuration Imports
Configurations.cpTypes = require('./configs/checkpoint_types').CheckpointsTypes;
//#endregion --END-- Configuration Imports

// NOTE exports of this file
exports.Configurations = Configurations;