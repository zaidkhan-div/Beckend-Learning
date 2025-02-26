create database firstdb;

use firstdb;

create table users (
 id INT AUTO_INCREMENT PRIMARY key,
 name VARCHAR(100),
 email VARCHAR(150) unique,
 age INT
);



insert into users (name,email,age)
values
('zaidkhan','zaid@gmail.com',29),
('asadjan',"asad@gmail.com",12),
('hamdan','hamdan@gmail.com',15);

insert into users (name,email,age)
values
('umar','umar@gmail.com',18);

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

