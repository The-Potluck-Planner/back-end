# Potluck Planner - Build Week

# Heroku API
- Will post api link here when deployed
​
## `API Endpoints`
## `Authentication`
- Register and Log in user
- Get list of users and user by id <br> <br>
​
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /auth/register | name (string), username (string), password (string) | N/A | Creates a new user. On success, returns message "user created" and newUser object with id & username.  Status 201 |
POST | /auth/login |  username (string), password (string) | N/A | Logs in users who already exists. On success, returns message "login successful" and JSON Web Token (Status 200). If unregistered users try to log in, returns "invalid username or password" (Status 401) |
​
​
# `Users`
​
- Update users by id
- Delete users by id <br>
​
| HTTP | Path               | Description                                   | Data|
| -------------- | ------------------------- | ---------------------------------- |
GET | /users            | Gets all users     |  Output `{"id", "name":"", "username":"", "password":""}`|
GET | /users/:id      | Gets user by ID    | Output `{"id", "username":"", "password"}`|
PUT | /users/:id    | Updates a user by id.   |  Expects `{"id", "username":"", "password":""}`|
DELETE | /users/:id | Deletes a user by id.   |  Expects `{no user information on body, just "id"}`|
​
​
# `Events`
​
- Add a new Potluck event
- Obtain list of Events by id
- Update Events by id
- Delete Events by id <br>
​
| GET | /events | Lists all events.   |  Output `{"id", "title", "description" }`|
| GET | /events/:id    | Gets an event by id.   |  Expects `{"id", "title":"", "description"}`|
| POST | /events      | Adds a new event.    |Ouput `{"id", "title":"", "description": ""}`|
| DELETE | /events/:id | Deletes a event by id.   |  Expects `{"id" no user information on body}`|

### Events
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/events | N/A | N/A | Returns all the events associated with this registered user |
GET | /api/events/:id |  N/A | N/A | Returns event object associated with this id |
POST | /api/events | title, description, month, day, year, time_from, time_to | N/A | Creates new event object and returns it. |
PUT | /api/events/:id |  N/A | title, description, month, day, year, time_from, time_to | Updates the event with this id, returns message "event updated" |
DELETE | /api/events/:id | N/A | N/A | Deletes the event with this id, returns message "event deleted" |

# Credits

UI Marketing Page: 
------------------
Harper Nettesheim https://github.com/hnetty

Front-end:
------------------
Wei Peluso https://github.com/weipeluso <br>
Ian McElroy https://github.com/mcelroyian

Back-End:
------------------
Rachele Edwards https://github.com/berachele