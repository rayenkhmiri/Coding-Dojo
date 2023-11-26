SELECT * FROM books_schema.books;
SELECT * from users;
SELECT * from books;
SELECT * from favorites;


INSERT INTO users (first_name, last_name) 
VALUES('Jane', 'Amsden');

INSERT INTO users (first_name, last_name) 
VALUES('Emily', 'Dixon'), ('Theodore', 'Dostoevsky'), ('William', 'Shapiro'), ('Lao', 'Xiu');


INSERT INTO books (title, num_of_pages) 
VALUES('C Sharp', 300), ('Java', 500), ('Python', 200), ('PHP', 1000);

INSERT INTO books (title, num_of_pages) 
VALUES('Ruby', 100);


UPDATE books
SET title = "C#"
WHERE title = "C Sharp";


UPDATE users
SET first_name = "Bill"
WHERE id = 4;


INSERT into favorites (user_id, book_id)
VALUES (1, 1);


INSERT into favorites (user_id, book_id)
VALUES (1, 2), (2, 1), (2, 2), (2, 3), (3,1), (3,2), (3,3), (3,4), (4,1), (4,2), (4,3), (4,4), (4, 5);


SELECT id, first_name, last_name from users
JOIN favorites on users.id = favorites.user_id
WHERE favorites.book_id = 3;


DELETE FROM favorites WHERE user_id = 2 AND book_id = 3;


INSERT into favorites (user_id, book_id)
VALUES (5, 2);


SELECT * from books
JOIN favorites on books.id = favorites.book_id
WHERE favorites.user_id = 3;


SELECT * from users
JOIN favorites on favorites.user_id = users.id
WHERE favorites.book_id = 5;