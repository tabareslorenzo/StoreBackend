/* Replace with your SQL commands */
CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES product(id)
);

-- Insert into order_products(quantity, order_id, product_id) VALUES(10,1,1);
-- Insert into orders(status, user_id) VALUES('pending', 1);
-- Insert into product(name, price, description) VALUES('3dtv', 2000, 'tv with 3d');
--  Insert into users(username,hashed_password) VALUES('sam', '1234');
--  Select product.name, product.price, product.description, orders.status from order_products as op inner join orders on op.order_id = orders.id  inner join product on op.product_id = product.id;                                                                                   ;
-- Select users.username, product.name, product.price, product.description, orders.status from order_products as op inner join orders on op.order_id = orders.id inner join users on orders.user_id = users.id  inner join product on op.product_id = product.id;

