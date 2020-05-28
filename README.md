# Potluck Planner - Build Week

## Heroku API
https://thepotluckplanner.herokuapp.com/ <br>
​
# `API Endpoints`
## Authentication
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /auth/register | name, username, password | N/A | Creates a new user. On success, returns message "user created" and newUser object. |
POST | /auth/login |  username, password | N/A | Logs in users who already exists. On success, returns message "(name)" and JSON Web Token. If unregistered users try to log in, returns "invalid username or password" |
## Users
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/users | N/A | N/A | Returns all users from database |
GET | /api/users/:id | N/A | N/A | Returns user object with this id |
PUT | /api/users/:id | either name, username, password,  or all | N/A | Updates the user with this id, and returns message "user (name) updated". |
DELETE | /api/users/:id | N/A | N/A | Deletes the user with this id, returns message "user deleted" |
## Events
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/events/users/:id | N/A | N/A | Returns all the events organized and invited to associated with this registered user |
GET | /api/events/:id |  N/A | N/A | Returns event object associated with this id |
POST | /api/events | userID(as organizer), title, month, day, year, time_From, time_To, location | description | Creates new event object and returns it. |
PUT | /api/events/:id | userID, title, month, day, year, time_From, time_To, location (*these do not need to be updated, just needs to be in the body or will return error) | description | Updates the event with this id, returns message "event (title) updated" |
DELETE | /api/events/:id | N/A | N/A | Deletes the event with this id, returns message "event deleted" |
## Food
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/events/:id/food | N/A | N/A | Returns all the food associated with this event id |
GET | /api/food/:id |  N/A | N/A | Returns food object associated with this id |
POST | /api/food | eventId, category, quantity, name (must be unique) | userID (defaults to null), assigned (defaults to false) until guest signs up for a food | Creates new food object and returns it. |
PUT | /api/food/:id | eventId, category, quantity (string: can be '1' or '1 loaf', also able to do fractions), name (must be unique) (*these do not need to be updated, just needs to be in the body or will return error) | assigned (defaults to false), location | Updates the food with this id, returns message "food (name) updated" |
DELETE | /api/food/:id | N/A | N/A | Deletes the food with this id, returns message "food deleted" |

# Credits

Project Manager: 
------------------
Buddy Agyin https://github.com/agyin3

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