# Potluck Planner - Build Week

## Heroku API
- Will post api link here when deployed <br>
​
# `API Endpoints`
## Authentication
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /auth/register | name, username, password | N/A | Creates a new user. On success, returns message "user created" and newUser object with id & username. |
POST | /auth/login |  username, password | N/A | Logs in users who already exists. On success, returns message "login successful" and JSON Web Token. If unregistered users try to log in, returns "invalid username or password" |
## Users
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/users | N/A | N/A | Returns all users from database |
GET | /api/users/:id | N/A | N/A | Returns user object with this id |
PUT | /api/users/:id | either name, username, password,  or all | N/A | Updates the user with this id, and returns message "user updated successfully". |
DELETE | /api/users/:id | N/A | N/A | Deletes the user with this id, returns message "user deleted" |
## Events
Method | Endpoint | Body (*Required*) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/events | N/A | N/A | Returns all the events associated with this registered user |
GET | /api/events/:id |  N/A | N/A | Returns event object associated with this id |
POST | /api/events | title, month, day, year, time_From, time_To, location | description | Creates new event object and returns it. |
PUT | /api/events/:id |  N/A | title, description, month, day, year, time_From, time_To, location | Updates the event with this id, returns message "event updated" |
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