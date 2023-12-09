# Homebase assignment

============

## Technical Stack

- Node.js
- Python
- Express.js
- Django

## Completed Tasks

- [x] API with Express and Node.js 
    - Create a simple REST API using Express.
    - Implement CRUD operations for a "User" resource.
- [x] Web Server with Django and Python
    - Create a Django web server with one model, e.g., "Product".
    - Implement CRUD operations via Django's admin interface.
- [x] API-to-Database Connection
    - Connect your Express API to a SQLite database using any ORM.
    - Store and retrieve "User" data.
- [x] API Proxy with Python
    - Create a Python script that acts as a proxy.
    - Forward requests from the Python script to the Express API.
- [x] Integration
    - Make the Django web server fetch "User" data from the Express API via the Python proxy.


## Prerequisites

- [Node.js 18.18.2](https://www.npmjs.com/package/firebase-tools)
- [Python 3.12.0](https://www.python.org/downloads/)
    ```bash
    pip3 install pipenv
    ```

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/thanhdang1709/homebase.git
```

### 2. Navigate to project

- Service user-api
    ```bash
    cd user-api
    npm install
    npm run serve
    ```
- Service api-proxy
    ```bash
    cd api-proxy
    pipenv install
    pipenv run python3 api-proxy.py runserver 
    ```
- Service admin-portal
    ```bash
    cd admin-portal
    pipenv install
    cd admin
    pipenv run python3 manage.py runserver 
    ```

### 3. Demo

- Service admin-portal
    - Login with a account: dat/qwerty1234! with link http://localhost:8000/admin/login/?next=/admin/
    - Finish Product CRUD operations and User Read operation 

- Service user-api
    - Test APIs with link http://localhost:5001
    - Finish User CRUD operations
        - GET /user
            - Code 200: response json array
        - GET /user/:id
            - Code 200: response json
            - Code 404: User not found
            - Code 400: Required field
        - PUT /user (JSON Request Body eg: {
                "fullName": "dang",
                "email": "thanhdang.ag@gmail.com"
            })
            - Code 200:
            - Code 400: Required field
        - DELETE /user/:id
            - Code 200:
- Service api-proxy
    - Test APIs with link http://localhost:5000
    - Finish User CRUD operations (work same user-api)