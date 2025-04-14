// Joins in MySql


// JOINS
//  In a DBMS, a join is an operation that combines rows from two or more tables based on a
//  related column between them.
//  Joins are used to retrieve data from multiple tables by linking them together using a common

// Inner Join
// Outer Join
// Cross Join
// Self Join

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


🔥 Next Step: Let’s Run Some JOIN Queries
✅ 1. INNER JOIN(Only users with orders)

SELECT users.name, orders.product_name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;
✅ 2. LEFT JOIN(All users, even if they have no orders)

SELECT users.name, orders.product_name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;


FROM users
LEFT JOIN orders ON users.id = orders.user_id;
users = left table ✅

orders = right table ✅