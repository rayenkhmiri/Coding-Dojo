SELECT * FROM friendship_db.friendships;
SET SQL_SAFE_UPDATES=0;

INSERT INTO users (first_name,last_name) VALUES ('Amy','Giver'),('Eli','Byers'),('Marky','Mark'),('Kermit','The Frog'),('Big','Bird'),('anis','rouis');

INSERT INTO friendships (user_id, friend_id) VALUES (1, 2),(1, 4),(1, 6);
INSERT INTO friendships (user_id, friend_id) VALUES (2, 1),(2, 3),(2, 5);
INSERT INTO friendships (user_id, friend_id) VALUES (3, 2),(3, 5);
INSERT INTO friendships (user_id, friend_id) VALUES (4, 3);
INSERT INTO friendships (user_id, friend_id) VALUES (5, 1),(5, 6);
INSERT INTO friendships (user_id, friend_id) VALUES (6, 2),(6, 3);

SELECT  users.first_name ,users.last_name,user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM users 
JOIN friendships ON users.id=friendships.user_id 
LEFT JOIN users as user2 ON friendships.friend_id = user2.id;

SELECT user2.first_name , user2.last_name
FROM users
JOIN friendships ON users.id = friendships.user_id
JOIN users AS user2 ON friendships.friend_id = user2.id
WHERE users.id = 1;

SELECT COUNT(*) AS friendship_count
FROM friendships;

SELECT user_id, COUNT(friend_id) AS friend_count
FROM friendships
GROUP BY user_id
ORDER BY friend_count DESC;

SELECT user2.first_name , user2.last_name
FROM friendships
JOIN users ON friendships.friend_id = users.id
JOIN users AS user2 ON friendships.user_id = user2.id
WHERE users.id = 3
ORDER BY user2.first_name ASC;