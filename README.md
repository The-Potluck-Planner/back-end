# Potluck Planner - Build Week

# Heroku API
- Will post api link here when deployed
​
## `API Endpoints`
### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /auth/register | name (string), username (string), password (string) | N/A | Creates a new user. On success, returns message "user created" and newUser object with id & username.  Status 201 |
POST | /auth/login |  username (string), password (string) | N/A | Logs in users who already exists. On success, returns message "login successful" and JSON Web Token (Status 200). If unregistered users try to log in, returns "invalid username or password" (Status 401) |
### Users
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
PUT | /api/users/:id | either password (string), or phoneNumber (10-digit string); or both | N/A | Updates the user with this id, and returns message "user updated successfully". |
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