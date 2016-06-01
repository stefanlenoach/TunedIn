# Schema Information

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
receiver_id | string    | not null, foreign key (references users), indexed
title       | string    | not null
body        | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id     | string    | not null
body        | datetime  | not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | string    | not null, foreign key (references users), indexed
title       | string    | not null
content     | string    | not null



## experiences
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references users), indexed
school           | string    | not null   
dates_attended   | string    |
degree           | string    |
field_of_study   | string    |
grade            | string    |
activities       | string    |
description      | string    |

## educations
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references users), indexed
institution_name | string    | not null   
title            | string    | not null
location         | string    |
time_period      | string    |
description      | string    |



## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null, not null
session_token   | string    | not null, not null
profile_pic     | image     |
job             | string    |
location        | string    |
