create database firstdb;

use firstdb;

create table users(
    id INT AUTO_INCREMENT PRIMARY key,
    name VARCHAR(100),
    email VARCHAR(150) unique,
    age INT
);

truncate table users; // to compltety resest the table


insert into users(name, email, age)
values
    ('zaidkhan', 'zaid@gmail.com', 29),
    ('asadjan', "asad@gmail.com", 12),
    ('hamdan', 'hamdan@gmail.com', 15);

insert into users(name, email, age)
values
    ('umar', 'umar@gmail.com', 18);

select * from users;

select * from users where age > 12;

select * from users where name = 'zaidkhan';

select * from users where email = 'anas@gmail.com';

select * from users where id = 1;

select * from users where name like 'H%';
// H% Stars with name;

select * from users where name like '%r';
// %r where name ends with r;

select * from users where name like '%d%';
// name where d contains anyWhere;

// Next Class 

select * from users order by age desc;
select * from users order by name asc;

// To get limit results 
// (LIMIT)
select * from users limit 2;
select * from users order by age desc limit 1;

// Get the second and third oldest users (skip 1, take next 2)
select * from users order by age desc limit 2 OFFSET 1;


// Step 9: Aggregation Functions
// Aggregation functions allow us to perform calculations on multiple rows.

select count(*) as total_users from users;


// Task 2: Find Minimum & Maximum Age
// Find the youngest user(minimum age):
SELECT MIN(age) AS youngest FROM users;
SELECT MAX(age) AS youngest FROM users;
select avg(age) as average_age from users;