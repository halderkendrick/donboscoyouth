CREATE DATABASE lafayette_college;
USE lafayette_college;

CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    date DATE
);

INSERT INTO news (title, description) VALUES 
('Students Develop Apps', 'A new wave of student-led tech innovations.'),
('Lafayette Science Symposium', 'Exploring new frontiers in science.');

INSERT INTO events (title, date) VALUES 
('Guest Lecture on AI', '2025-03-10'),
('Music Concert', '2025-03-20');
