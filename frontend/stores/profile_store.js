var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ProfileConstants = require('../constants/profile_constants');

var ProfileStore = new Store(AppDispatcher);
var _items = {};


module.exports = ProfileStore;
