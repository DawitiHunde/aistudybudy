-- SQL Schema for flashcard database
CREATE DATABASE flashcard_db;

USE flashcard_db;

CREATE TABLE study_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    notes TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flashcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    FOREIGN KEY (session_id) REFERENCES study_sessions(id)
);