# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

<!-- You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do. -->

## ProfileInfo Cycles

### ProfileInfos API Request Actions

* `fetchAllProfileInfos`
  0. invoked from `ProfileInfosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/profile_infos` is called.
  0. `receiveAllProfileInfos` is set as the callback.

* `createProfileInfo`
  0. invoked from new profile_info button `onClick`
  0. `POST /api/profile_infos` is called.
  0. `receiveSingleProfileInfo` is set as the callback.

* `fetchSingleProfileInfo`
  0. invoked from `ProfileInfoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/notes/:id` is called.
  0. `receiveSingleProfileInfo` is set as the callback.

* `updateProfileInfo`
  0. invoked from `ProfileInfoForm` `onSubmit`
  0. `POST /api/profile_infos` is called.
  0. `receiveSingleProfileInfo` is set as the callback.

* `destroyProfileInfo`
  0. invoked from delete profile_info button `onClick`
  0. `DELETE /api/profile_infos/:id` is called.
  0. `removeProfileInfo` is set as the callback.

### ProfileInfos API Response Actions

* `receiveAllProfileInfos`
  0. invoked from an API callback.
  0. `ProfileInfo` store updates `_profile_infos` and emits change.

* `receiveSingleProfileInfo`
  0. invoked from an API callback.
  0. `ProfileInfo` store updates `_profile_infos[id]` and emits change.

* `removeProfileInfo`
  0. invoked from an API callback.
  0. `ProfileInfo` store removes `_profile_infos[id]` and emits change.

### Store Listeners

* `ProfileInfosIndex` component listens to `ProfileInfo` store.
* `ProfileInfoDetail` component listens to `ProfileInfo` store.

## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the callback.

* `createPost`
  0. invoked from new post button `onClick`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/notes/:id` is called.
  0. `receiveSinglePost` is set as the callback.

* `updatePost`
  0. invoked from `PostForm` `onSubmit`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `destroyPost`
  0. invoked from delete post button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `Post` store updates `_posts` and emits change.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. `Post` store updates `_posts[id]` and emits change.

* `removePost`
  0. invoked from an API callback.
  0. `Post` store removes `_posts[id]` and emits change.

### Store Listeners

* `PostsIndex` component listens to `Post` store.
* `PostDetail` component listens to `Post` store.


## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the callback.

* `createComment`
  0. invoked from new notebook button `onClick`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `destroyComment`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/comments/:id` is called.
  0. `removeComment` is set as the callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_notebooks` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_notebooks[id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `Comment` store removes `_notebooks[id]` and emits change.

### Store Listeners

* `CommentsIndex` component listens to `Comment` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
