
SELECT * FROM users.users;

insert into users.users(first_name,last_name,email) values
("rayen","khemiri","rayenkhmiri@gmail.com"),("tasnime","balti","tasnimebalti@gmail.com"),("ahmed","mohsen","ahmedyamohsen@gmail.com");

Select * FROM users.users;

Select * FROM users.users where email="rayenkhmiri@gmail.com";
Select * FROM users.users where id=21;

update users.users 
Set last_name="pancakes"
where id=21;

delete FROM users.users 
where id=20;

select * from users.users order by users.first_name;
select * from users.users order by users.first_name DESC	