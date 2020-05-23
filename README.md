# `Heroku API` 
- Will post api link here when deployed
​
# `Auth Login`
​
- Register and Log in user
- Get list of users and user by id
​
| HTTP | Path               | Desc                                   | Data|
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- |
| POST | /auth/register | Registers new user. | Expects `{"name:", "username":", "password"}`|
| POST | /auth/login    | Logs in a user.   |  Expects `{"username":"", "password":""}`|
​
​
# `Users` Table
​
- Update users by id
- Delete users by id
​
| HTTP | Path               | Desc                                   | Data|
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- |
| GET | /users            | Gets all users     |  Output `{"id", "username":"", "password":""}`|
| GET | /users/:id      | Gets user by ID    | Output `{"id", "username":"", "password"}`|
| PUT | /users/:id    | Updates a user by id.   |  Expects `{"id", "username":"", "password":""}`|
| DELETE | /users/:id | Deletes a user by id.   |  Expects `{no user information on body, just "id"}`|
​
​
# `Events` Table
​
- Add a new Potluck event
- Obtain list of Events by id
- Update Events by id
- Delete Events by id
​
| HTTP | Path               | Desc                                   | Data|
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- |
| GET | /events | Lists all events.   |  Output `{"id", "title", "description" }`|
| GET | /events/:id    | Gets an event by id.   |  Expects `{"id", "title":"", "description"}`|
| POST | /events      | Adds a new event.    |Ouput `{"id", "title":"", "description": ""}`|
| DELETE | /events/:id | Deletes a event by id.   |  Expects `{"id" no user information on body}`|


# Credits

UI Marketing Page: 
------------------
Harper Nettesheim https://github.com/hnetty

Front-end:
------------------
Wei Peluso https://github.com/weipeluso

Ian McElroy https://github.com/mcelroyian

Back-End:
------------------
Rachele Edwards https://github.com/berachele