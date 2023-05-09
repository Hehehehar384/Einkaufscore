from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# define initial data structure to store the points
points_data = {
    "Jonas": 0,
    "Peter": 0,
    "Mama": 0,
    "Papa": 0
}

# endpoint to get the current points data
@app.route('/points', methods=['GET'])
def get_points():
    return jsonify(points_data)

# endpoint to update the points data
@app.route('/points', methods=['POST'])
def update_points():
    global points_data
    data = request.get_json()
    for name, points in data.items():
        if name in points_data:
            points_data[name] += points
    with open('points.json', 'w') as f:
        json.dump(points_data, f)
    return jsonify(points_data)

if __name__ == '__main__':
    app.run(debug=True)
