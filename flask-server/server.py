from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

import numpy as np

app = Flask(__name__)
CORS(app)

# Data API route
@app.route("/data/<email>")
@cross_origin()
def getData(email):
    arr = np.genfromtxt("iris.csv", delimiter=",", dtype=None)
    if email == "setosa@gmail.com":
        arr = [x for x in arr if x[4] == "Iris-setosa"]
    elif email == "virginica@gmail.com":
        arr = [x for x in arr if x[4] == "Iris-virginica"]
    transposed_array = np.transpose(arr)
    return { "data": { "sepalLength": list(transposed_array[0]), "sepalWidth": list(transposed_array[1]), "petalLength": list(transposed_array[2]), "petalWidth": list(transposed_array[3])} }

# Login API route
@app.route("/login", methods=["POST"])
@cross_origin()
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    if email == "setosa@gmail.com" and password == "setosa":
        return "setosa_token"
    elif email == "virginica@gmail.com" and password == "virginica":
        return "virginica_token"
    else:
        return ""

if __name__ == "__main__":
    app.run(debug=True)