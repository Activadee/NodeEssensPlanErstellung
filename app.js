const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const verify = require('./routes/verifyToken');
const tokenAuth = require('./routes/tokenAuth');
const login = require('./routes/login');


const registUser = require('./routes/User/registUser');
const registAdmin = require('./routes/Admin/registAdmin');
const registKoch = require('./routes/Koch/registKoch');
const registMeal = require('./routes/Gerichte/registMeal');
const resgistDessert = require('./routes/Desserts/registDessert');
const registPlan = require('./routes/Plan/createPlan');
const registUserPlan = require('./routes/Plan/createUserPlan');
const readUser = require('./routes/User/readAllUser');
const readCooks = require('./routes/Koch/readAllCooks');
const readAdmins = require('./routes/Admin/readAllAdmins');
const readMeals = require('./routes/Gerichte/readAllMeals');
const readDesserts = require('./routes/Desserts/readAllDesserts');
const readPlan = require('./routes/Plan/readPlan');
const readCurrPlan = require('./routes/Plan/readCurrPlan');
const readUserPlan = require('./routes/Plan/readUserPlan');

const updateUser = require('./routes/User/updateUser');
const updateKoch = require('./routes/Koch/updateKoch');
const updateAdmin = require('./routes/Admin/updateAdmin');
const updateMeal = require('./routes/Gerichte/updateMeal');
const updateDessert = require('./routes/Desserts/updateDessert');
const updatePlan = require('./routes/Plan/updatePlan');
const updateCurrUser = require('./routes/User/updateCurrUser');
const toCook = require('./routes/Koch/toCook');

const deleteUser = require('./routes/User/deleteUser');
const deleteKoch = require('./routes/Koch/deleteKoch');
const deleteAdmin = require('./routes/Admin/deleteAdmin');
const deleteMeal = require('./routes/Gerichte/deleteMeal');
const deleteDessert = require('./routes/Desserts/deleteDessert');
const deletePlan = require('./routes/Plan/deletePlan');

// DB connect
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, (e) => console.log(e));


// view engine setup
// Add headers
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', login);
app.use('/api/verify', tokenAuth);
app.use('/read/currplan', verify.userVerify, readCurrPlan);
app.use('/read/userplan', verify.userVerify, readUserPlan);

app.use('/reg/admin', verify.adminVerify, registAdmin);
app.use('/reg/user', verify.adminVerify, registUser);
app.use('/reg/koch', verify.cookOrAdmin, registKoch);
app.use('/reg/meal', verify.cookOrAdmin, registMeal);
app.use('/reg/dessert', verify.cookOrAdmin, resgistDessert);
app.use('/reg/plan', verify.cookOrAdmin, registPlan);
app.use('/reg/userplan', verify.userVerify, registUserPlan);


app.use('/read/users',verify.adminVerify, readUser);
app.use('/read/cooks', verify.cookOrAdmin, readCooks);
app.use('/read/admins', verify.adminVerify, readAdmins);
app.use('/read/meals', verify.cookOrAdmin, readMeals);
app.use('/read/desserts', verify.cookOrAdmin, readDesserts);
app.use('/read/plan', verify.cookOrAdmin, readPlan);
app.use('/toCook', verify.cookOrAdmin, toCook);

app.use('/update/user', verify.adminVerify, updateUser);
app.use('/update/koch', verify.cookOrAdmin, updateKoch);
app.use('/update/admin', verify.adminVerify, updateAdmin);
app.use('/update/meal', verify.cookOrAdmin, updateMeal);
app.use('/update/dessert', verify.cookOrAdmin, updateDessert);
app.use('/update/plan', verify.cookOrAdmin, updatePlan);
app.use('/update/cuser', verify.userVerify, updateCurrUser);


app.use('/delete/user', verify.adminVerify, deleteUser);
app.use('/delete/koch', verify.cookOrAdmin, deleteKoch);
app.use('/delete/admin', verify.adminVerify, deleteAdmin);
app.use('/delete/meal', verify.cookOrAdmin, deleteMeal);
app.use('/delete/dessert', verify.cookOrAdmin, deleteDessert);
app.use('/delete/plan', verify.cookOrAdmin, deletePlan);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
