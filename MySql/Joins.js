// 10) Joins in MySql


// JOINS
//  In a DBMS, a join is an operation that combines rows from two or more tables based on a
//  related column between them.
//  Joins are used to retrieve data from multiple tables by linking them together using a common

// Inner Join
// Outer Join
// Cross Join
// Self Join

create Table users(
    id INT auto_increment,
    name varchar(100),
    email varchar(200) unique,
    age INT,
    primary key(id)
);

CREATE TABLE orders(
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_name VARCHAR(100),
    order_date DATE,
    FOREIGN KEY(user_id) REFERENCES users(id)
);


// Inner Join

SELECT users.name, orders.product_name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;


/// LEft Joins

SELECT users.name, orders.product_name, orders.order_date
FROM users
LEFt JOIN orders ON users.id = orders.user_id;


Next Step: Let’s Run Some JOIN Queries
INNER JOIN(Only users with orders)

SELECT users.name, orders.product_name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;
LEFT JOIN(All users, even if they have no orders)

SELECT users.name, orders.product_name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;


FROM users
LEFT JOIN orders ON users.id = orders.user_id;
users = left table

orders = right table


//  Next Step: GROUP BY (Aggregation)
// Now we’ll learn how to:

// Group data

// Count rows

// Calculate sums, averages, etc.

SELECT users.name, COUNT(orders.order_id) AS total_orders
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.name;


SELECT users.name, COUNT(orders.order_id) AS total_orders
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.name;


// 11) Next Topic: Subqueries (Queries inside queries)

// Where Clouse 
SELECT * FROM orders
WHERE order_date = (
    SELECT MAX(order_date) FROM orders
);

// Subquery with IN
SELECT * FROM users
WHERE id IN(
    SELECT user_id FROM orders
);

// Subquery with EXISTS

SELECT * FROM users
WHERE EXISTS(
    SELECT 1 FROM orders WHERE users.id = orders.user_id
);



// CASE Statement (SQL’s IF-ELSE) usage Case else

SELECT name, age,
    CASE
    WHEN age >= 18 THEN 'Adult'
    ELSE 'Minor'
  END AS age_status
FROM users;
