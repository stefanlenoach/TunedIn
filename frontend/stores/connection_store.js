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

ConnectionStore.allConnected = function (id) {
  var connections = [];
  Object.keys(_connections).forEach(function (key){
    if ((_connections[key].connector_id === id) || (_connections[key].connectee_id === id)){
      if (_connections[key].status === "connected") {
        connections.push(_connections[key]);
      }
    }
  });
  return connections;
};

ConnectionStore.allPending = function (id) {
  var connections = [];
  Object.keys(_connections).forEach(function (key){
    if (_connections[key].connectee_id === id){
      if (_connections[key].status === "pending") {
        connections.push(_connections[key]);
      }
    }
  });
  return connections;
};

ConnectionStore.find = function (id) {
  return _connections[id];
};

ConnectionStore.findByIds = function (connectorId, connecteeId) {
  Object.keys(_connections).forEach(function (key){
    if ((_connections[key].connector_id === parseInt(connecteeId)) && (_connections[key].connectee_id === connectorId)){
      return _connections[key];
    }
  });
};


ConnectionStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case ConnectionConstants.GET_CONNECTIONS:
      resetConnections(payload.connections);
      this.__emitChange();
      break;
    case ConnectionConstants.RECEIVE_CONNECTION:
      addConnection(payload.connection);
      console.log(_connections);
      this.__emitChange();
      break;
    case ConnectionConstants.REMOVE_CONNECTION:
      removeConnection(payload.connection);
      console.log(_connections);
      this.__emitChange();
      break;
  }

};

module.exports = ConnectionStore;
