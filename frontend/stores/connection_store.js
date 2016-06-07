var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ConnectionConstants = require('../constants/connection_constants');

var ConnectionStore = new Store(AppDispatcher);

var _connections = {};

var resetConnections = function(connections) {
  _connections = {};

  connections.forEach(function(connection){
    _connections[connection.id] = connection;
  });
};

var addConnection = function(connection) {
  _connections[connection.id] = connection;
};

var removeConnection = function(connection) {
  delete _connections[connection.id];
};

ConnectionStore.all = function () {
  return Object.keys(_connections).map(function (connectionId){
    return _connections[connectionId];
  });
};

ConnectionStore.find = function (id) {
  return _connections[id];
};

ConnectionStore.findByIds = function (connectorId, connecteeId) {
  var connectId;
  Object.keys(_connections).forEach(function (key){
    if ((_connections[key].connector_id === parseInt(connecteeId)) && (_connections[key].connectee_id === connectorId)){
      connectId = key;
    }
  });
  return connectId;
};


ConnectionStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case ConnectionConstants.GET_CONNECTIONS:
      resetConnections(payload.connections);
      break;
    case ConnectionConstants.RECEIVE_CONNECTION:
      addConnection(payload.connection);
      break;
    case ConnectionConstants.REMOVE_CONNECTION:
      removeConnection(payload.connection);
      break;
  }
  this.__emitChange();
};

module.exports = ConnectionStore;
