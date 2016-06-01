# Phase 5: Posts (1 Day)

## Rails
### Models
* PostModel

### Controllers
* Api::PostsController (create, destroy, index, show, update)

### Views
* posts/show.json.jbuilder
* posts/edit.json.jbuilder

## Flux
### Views (React Components)
* PostsIndex
* PostShow
* PostForm

### Stores
* PostStore
* CommentStore

### Actions
* ServerActions.receiveAllPosts
* ServerActions.receiveSinglePost
* ServerActions.deletePost
* ClientActions.fetchPosts
* ClientActions.createPost
* ClientActions.editPost
* ClientActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.createPost
* ApiUtil.editPost
* ApiUtil.destroyPost

## Gems/Libraries
