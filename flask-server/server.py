from flask import Flask, request
from flask_cors import CORS, cross_origin
import numpy as np

# Initialize the Flask application
app = Flask(__name__)
# Enable Cross-Origin Resource Sharing (CORS) for the app
CORS(app)

# Route to handle data retrieval based on email
@app.route("/data/<email>")
@cross_origin()
def getData(email):
    # Load the Iris dataset from a CSV file
    arr = np.genfromtxt("iris.csv", delimiter=",", dtype=None, encoding=None)
    
    # Filter data based on the email address
    if email == "setosa@gmail.com":
        arr = [x for x in arr if x[4] == "Iris-setosa"]
    elif email == "virginica@gmail.com":
        arr = [x for x in arr if x[4] == "Iris-virginica"]
    
    # Transpose the array to separate features
    transposed_array = np.transpose(arr)
    
    # Return the data in a structured JSON format
    return {
        "data": {
            "sepalLength": list(transposed_array[0]),
            "sepalWidth": list(transposed_array[1]),
            "petalLength": list(transposed_array[2]),
            "petalWidth": list(transposed_array[3])
        }
    }

# Route to handle login requests
@app.route("/login", methods=["POST"])
@cross_origin()
def login():
    # Get the email and password from the request body
    email = request.json.get('email')
    password = request.json.get('password')
    
    # Simple authentication check
    if email == "setosa@gmail.com" and password == "setosa":
        return "setosa_token"
    elif email == "virginica@gmail.com" and password == "virginica":
        return "virginica_token"
    else:
        return ""

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)
