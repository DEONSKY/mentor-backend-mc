# mentor-backend-mc
Mavidurak-io express js ve sequelize kullanılan backend projesi

## Project setup
All node modules inside the projet. But you can use
```
npm install
```
You can use Postman for sending requests.
You must write your mysql-server username,password and database-name at config.json's development field

### Compiles and hot-reloads for development
```
npm run dev
```

### For listing all users
GET
```
http://localhost:3000/api/all
```

### For find user
GET
```
http://localhost:3000/api/find/{id}
```

### For insert user
POST
```
http://localhost:3000/api/new
```
You must write user info's at Body x-www-form-urlencoded. 


### For editing user
PUT
```
http://localhost:3000/api/edit
```
You must write user info's at Body x-www-form-urlencoded. NOTE: At this time only password_salt edit supported


### For delete user
DELETE
```
http://localhost:3000/api/delete/{id}
```

### Last Words
All table connections and table propertys are created. But apiRoutes supports only user table actions.

