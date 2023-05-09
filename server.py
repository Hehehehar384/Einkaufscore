from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE = "points.db"

def create_table():
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("CREATE TABLE IF NOT EXISTS points (id INTEGER PRIMARY KEY, name TEXT, points INTEGER)")

def insert_points(name, points):
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("INSERT INTO points (name, points) VALUES (?, ?)", (name, points))

def update_points(name, points):
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("UPDATE points SET points = ? WHERE name = ?", (points, name))

def get_points():
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("SELECT * FROM points")
        rows = c.fetchall()
        return [{"name": row[1], "points": row[2]} for row in rows]

create_table()

@app.route('/api/points', methods=['GET', 'POST'])
def points():
    if request.method == 'POST':
        name = request.json['name']
        points = request.json['points']
        if not any(d['name'] == name for d in get_points()):
            insert_points(name, points)
        else:
            update_points(name, points)
        return jsonify({"success": True})
    else:
        return jsonify(get_points())

if __name__ == '__main__':
    app.run(debug=True)
