# Phase 7: Connections (1 Day)


## Rails
### Models
* ConnectionModel

### Controllers
* Api::ConnectionsController (create, destroy, show, index)

### Views
* connections/show.json.builder
* connections/index.json.builder

## Flux
### Views (React Components)
* AddConnection
* ShowConnections

### Stores
* ConnectionsStore

### Actions
* ServerActions.receiveAllConnections
* ServerActions.receiveSingleConnection
* ServerActions.deleteConnection
* ClientActions.fetchConnections
* ClientActions.createConnection
* ClientActions.destroyConnection

### ApiUtil
* ApiUtil.fetchAllConnections
* ApiUtil.createConnection
* ApiUtil.destroyConnection

## Gems/Libraries
