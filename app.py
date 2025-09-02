# app.py - Flask Backend
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import requests

app = Flask(name)
CORS(app)  # Enable Cross-Origin Requests

# Database configuration
db_config = {
    'user': 'your_username',
    'password': 'your_password',
    'host': 'localhost',
    'database': 'flashcard_db'
}

@app.route('/generate-flashcards', methods=['POST'])
def generate_flashcards():
    data = request.json
    notes = data.get('notes', '')
    
    # Call Hugging Face API to generate questions
    questions = call_hugging_face_api(notes)
    
    # Save to database
    save_to_database(notes, questions)
    
    return jsonify({'flashcards': questions})

def call_hugging_face_api(notes):
    # This would make a request to the Hugging Face API
    # For demo purposes, we're simulating this
    headers = {'Authorization': 'Bearer YOUR_HUGGING_FACE_TOKEN'}
    # response = requests.post('https://api-inference.huggingface.ai/models/your-model', headers=headers, json=notes)
    # return response.json()
    
    # Simulated response for demo
    return [
        {'question': 'What process do plants use to convert sunlight into energy?', 'answer': 'Photosynthesis'},
        {'question': 'What are mitochondria known as?', 'answer': 'The powerhouse of the cell'}
    ]

def save_to_database(notes, flashcards):
    # Connect to MySQL and save the data
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    
    # Insert notes and flashcards
    # Implementation would depend on your database schema
    
    connection.commit()
    cursor.close()
    connection.close()

if name == 'main':
    app.run(debug=True)