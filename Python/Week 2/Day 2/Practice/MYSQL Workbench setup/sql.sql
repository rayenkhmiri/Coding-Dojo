--  Insert Into One To One
INSERT INTO
    addresses (user_id, street, city, code)
VALUES
    (2, "Street number one", "CALI", "54331");

-- Insert into items
INSERT INTO
    items (title, price, quantity)
VALUES
    ('Laptop', 999.99, 20),
    ('Smartphone', 599.99, 50),
    ('Headphones', 79.99, 100),
    ('Camera', 499.95, 15),
    ('Tablet', 299.99, 30),
    ('Wireless Mouse', 29.99, 75);

-- Insert Into One to Many
INSERT INTO
    orders (user_id, amount)
VALUES
    (1, 2100.0),
    (2, 1430),
(1, 780);

-- Join
SELECT
    *
FROM
    users
    JOIN orders ON users.id = orders.user_id;

SELECT
    *
FROM
    users
    LEFT JOIN orders ON users.id = orders.user_id;

-- INSERT MANY TO MANY
INSERT INTO
    ordered_items (order_id, item_id, quantity)
VALUES
    (1, 1, "1"),
(1, 2, "1"),
(1, 4, "1"),
(2, 5, "3"),
(2, 6, "1"),
(2, 4, "1"),
(3,4,"1"),
(3,5,"1");