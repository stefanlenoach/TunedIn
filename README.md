# TunedIn

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

##Plan for the week
Monday:  Searchbar, seed database, logging out, sign up page
Tuesday: Add connections, working notifications UI
Wednesday: ConnectionsPage, HomePage (Posts?)
Thursday: Styling...
Friday:

## Minimum Viable Product

TunedIn is a web application inspired by LinkedIn that will be developed using
Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum,
satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a LinkedIn-inspired site: create and edit profile, create edit and delete posts, comment on posts, add connections, have a home page filled with posts from connections
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities

TunedIn will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete Profile objects (MVP)
- [ ] Create, read, edit, and delete posts (MVP)
- [ ] Create, read, edit, and delete comments (MVP)
- [ ] Add friends / connections (MVP)
- [ ] Add skills, allows skills to be endorsde by connections (additional feature)
- [ ] Show job postings users can apply to (additional feature)
- [ ] Messaging between connections (additional feature)
- [ ] Complex styling to features

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: User Profile (1.5 days)

**Objective:** Profile can be edited, expanded through the API.

- [ ] create Profile model
- [ ] add profile picture, name, location, experience, skills, etc.
- [ ] owner may create edit and destroy, others may view
- [ ] owner may upload documents (CV, cover letter, awards, etc.)
- [ ] seed database with test data


### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Profile can be edited and expanded, destroyed through the user interface

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each profile component.
  - [ ] `Profile Picture`
  - [ ] `Main Information (name, work, location)`
  - [ ] `Experience`
  - [ ] `Education`
  - [ ] `Skills`
- [ ] save profile form to the DB when form loses focus or if left idle after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5:Posts and Homepage (1 day)

**Objective:** Allow users to create posts that will display on Home page.

- [ ] create Post model
- [ ] Post CRUD
- [ ] Build home page
- [ ] viewing posts on home page
- Use CSS to style new views


### Phase 6: Comments (1 day)

**Objective:** Allow users to make comments on posts.

- [ ] create Comment model
- [ ] create comment component
- [ ] allow author to edit / delete comments
- [ ] Style new elements

### Phase 7: Connections (2 days)

**objective:** Enable users to add connections.

- [ ] user can request a connection
- [ ] other will accept or decline
- [ ] connected users may message each other
- [ ] Homepage will show posts of connections

### Phase 8: Navbar setup and SearchBar (1.5 days)

**objective:** Create interactive navbar.

- [ ] user search for other users
- [ ] will show notifications drowdown
- [ ] will show account & settings dropdown

### Phase 9: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Skills, connections can make endorsements
- [ ] Job posts
- [ ] Infinite scroll for homepage
- [ ] 2nd, 3rd degree connections
- [ ] Advertisements

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
