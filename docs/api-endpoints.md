# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Post

- `GET /api/posts`
  - Post index/search
  - accepts `tag_name` query param to list posts by tag
  - accepts pagination params (if I get there)
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`
- `GET /api/posts/:id/comments`
  - index of all comments for a post

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Profile

- `GET /api/profiles`
- `POST /api/profiles`
- `GET /api/profiles/:id`
- `PATCH /api/profiles/:id`
- `DELETE /api/profiles/:id`
