var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var ConnectionStore = require('../stores/connection_store');
var ConnectionApiUtil = require('../util/connection_api_util');
var ConnectionConstants = require('../constants/connection_constants');


module.exports = {

  fetchForms: function (connections) {
    AppDispatcher.dispatch({
      actionType: ConnectionConstants.GET_CONNECTIONS,
      connections: connections
    });
  },

  receiveForm: function (connection) {
    AppDispatcher.dispatch({
      actionType: ConnectionConstants.RECEIVE_CONNECTION,
      connection: connection
    });
  },

  removeForm: function (connection) {
    AppDispatcher.dispatch({
      actionType: ConnectionConstants.REMOVE_CONNECTION,
      connection: connection
    });
  }
};
