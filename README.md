create database fruitsdb

CREATE TABLE fruits (     
id INT AUTO_INCREMENT PRIMARY KEY,    
name VARCHAR(255) NOT NULL,    
quantity INT NOT NULL,  
price DECIMAL(10,2) NOT NULL );

INSERT INTO fruits (name, quantity, price) VALUES 
('Alma', 50, 1.20),
('Banán', 30, 0.80),
('Narancs', 40, 1.50),
('Szőlő', 25, 2.00),
('Eper', 15, 3.50),
('Körte', 35, 1.75),
('Ananász', 10, 4.20),
('Mangó', 20, 2.80),
('Cseresznye', 18, 5.00),
('Kiwi', 22, 2.30);
