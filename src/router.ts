import express, {application} from 'express';
import users from './routes/users';
import orders from './routes/orders';
import product from './routes/product';
import order_product from './routes/order_product';
import dashboard from './routes/dashboard'
// var post = require('./post');
// var comment = require('./comment');

const routes = (app : typeof application) => {
    app.use('/users', users);
    app.use('/orders', orders);
    app.use('/product', product);
    app.use('/order_product', order_product);
    app.use('/users_orders', dashboard)
}
// rootRouter.use('/post', post);
// rootRouter.use('/comment', comment);

export default routes;