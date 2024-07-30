CREATE TABLE traffic_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_type VARCHAR(255),
    count INT,
    lat DECIMAL(10, 6),
    lng DECIMAL(10, 6),
    timestamp DATETIME
);

CREATE TABLE pollution_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    level FLOAT,
    timestamp DATETIME
);

CREATE TABLE energy_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consumption FLOAT,
    timestamp DATETIME
);

-- Sample Data
INSERT INTO traffic_data (vehicle_type, count, lat, lng, timestamp) VALUES ('car', 50, 51.505, -0.09, NOW());
INSERT INTO pollution_data (level, timestamp) VALUES (35.5, NOW());
INSERT INTO energy_data (consumption, timestamp) VALUES (1200.0, NOW());
