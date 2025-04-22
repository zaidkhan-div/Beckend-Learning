// 🚀 Advanced SQL & MySQL Concepts
// Indexes & Performance Optimization
// 🔹 What is an Index?
// An index is like a table of contents in a book — it makes data faster to find.


CREATE INDEX idx_email ON users(email);
This improves performance when you search by email:

SELECT * FROM users WHERE email = 'zaid@example.com';

// Types of Indexes:
// PRIMARY KEY → automatically indexed.


// Indexes improve read speed, but can slow down inserts/updates (because index needs updating too).

CREATE INDEX idx_userid ON orders(user_id);
Then run this and observe performance:

SELECT * FROM orders WHERE user_id = 1;
✅ Once done, we’ll move to Stored Procedures & Functions next.


// CREATE TABLE users (
//     id INT PRIMARY KEY,         -- index created automatically
//     email VARCHAR(100) UNIQUE,  -- index created automatically
//     name VARCHAR(100)
//   );
  