/* Replace with your SQL commands */
CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES product(id)
);


--  Select product.name, product.price, product.description, orders.status from order_products as op inner join orders on op.order_id = orders.id  inner join product on op.product_id = product.id;                                                                                   ;
-- Select users.username, product.name, product.price, product.description, orders.status from order_products as op inner join orders on op.order_id = orders.id inner join users on orders.user_id = users.id  inner join product on op.product_id = product.id;

