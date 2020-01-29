# Student APP

## Getting Started

### Backend
- Database: [Mongodb](https://www.mongodb.com/what-is-mongodb)
- Make sure you have mongodb installed and the server is running.
- [Install mongodb](https://docs.mongodb.com/manual/installation/).
To start and run the local development server,

1. Clone this repo:
    ```
    $ git clone https://github.com/Philipotieno/Fyyur-App.git
    ```

2. Cd into the backend directory:
    ```
    $ cd backend
    ```
3. Install the dependencies:
    ```
    $ npm install
    ```
4. Run the development server:
    ```
    $ npm start
    ```
    -- Server running at http://localhost:4000

5. Test your endpoints with [Postman](https://getpostman.com). 
    - Import the postman collection [Student-App.postman_collection](https://github.com/Philipotieno/Student-App/blob/develop/backend/Student%20App.postman_collection.json)

6. Test the following endpoints

## Endpoints...

### POST '/students'
 - Adds a new student
 - Request Arguments: Student body

- Student body: 
```json
{
    "name": "Brad Pitt",
    "email": "brad@gmail.com",
    "rollno": 1
}
```
- Returns:
```json
{
    "_id": "5e31526390c0e7422616e433",
    "name": "Brad Pitt",
    "email": "brad@gmail.com",
    "rollno": 1,
    "__v": 0
}
```
### GET '/students'
- Fetches a list of all students
- Returns: 
```json
[
    {
        "_id": "5e31526390c0e7422616e433",
        "name": "Brad Pitt",
        "email": "brad@gmail.com",
        "rollno": 1,
        "__v": 0
    },
    {
        "_id": "5e3152bc90c0e7422616e434",
        "name": "Test user",
        "email": "brad@gmail.com",
        "rollno": 1,
        "__v": 0
    },
    {
        "_id": "5e3152be90c0e7422616e435",
        "name": "Test user",
        "email": "brad@gmail.com",
        "rollno": 1,
        "__v": 0
    }
]
```

### GET '/students/:id'
- Fetches a dictionary of one student
- Returns: 
```json
{
    "_id": "5e31526390c0e7422616e433",
    "name": "Brad Pitt",
    "email": "brad@gmail.com",
    "rollno": 1,
    "__v": 0
}
```
### PUT '/students/:id'
 - Updates a students details
 - Request Arguments: Student body

- Student body: 
```json
{
    "name": "Brad Pitt okulu",
    "email": "brad@gmail.com",
    "rollno": 1
}
```
- Returns:
```json
{
    "_id": "5e31526390c0e7422616e433",
    "name": "Brad Pitt okulu",
    "email": "brad@gmail.com",
    "rollno": 1,
    "__v": 0
}
### DELETE '/students/:id'
- Deletes a student
- Returns: 
```json
{
    "student": {
        "_id": "5e3152be90c0e7422616e435",
        "name": "Test user",
        "email": "brad@gmail.com",
        "rollno": 1,
        "__v": 0
    },
    "message": "deleted"
}
```
### Frontend
 To start and run the local development server,

1. Cd into the backend directory:
    ```
    $ cd frontend
    ```
3. Install the dependencies:
    ```
    $ npm install
    ```
4. Run the development server:
    ```
    $ npm start
    ```