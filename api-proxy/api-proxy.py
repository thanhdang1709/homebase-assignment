from flask import Flask, request
import requests

app = Flask(__name__)

USER_MICROSERVICE_URL = 'http://localhost:5001/user'

@app.route('/user', methods=['POST'])
def createUser():
    data = request.get_json()
    response = requests.post(USER_MICROSERVICE_URL, json=data)
    return resolveResponse(response)

@app.route('/user', methods=['GET'])
def getUsers():
    response = requests.get(USER_MICROSERVICE_URL)
    return resolveResponse(response)

@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    response = requests.get(f'{USER_MICROSERVICE_URL}/{id}')
    return resolveResponse(response)

@app.route('/user', methods=['PUT'])
def updateUser():
    data = request.get_json()
    response = requests.put(USER_MICROSERVICE_URL, json=data)
    return resolveResponse(response)

# Delete (DELETE) a specific task by ID
@app.route('/user/<id>', methods=['DELETE'])
def deleteUser(id):
    response = requests.delete(f'{USER_MICROSERVICE_URL}/{id}')
    return resolveResponse(response)

def resolveResponse(response):
    return (response.content, response.status_code, response.headers.items())

if __name__ == '__main__':
    app.run(port=5000)