const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
// require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// add the middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes.js'));

//  =====  our first applications had all of the routes in the server like the one below...
// move routes into routes folder/file
// app.get('/api/goals', (req, res) => {
//     res.status(200).json({message: 'get goals'});
// })
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));