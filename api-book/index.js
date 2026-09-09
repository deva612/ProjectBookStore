const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./connection');
const book = require('./routes/bookRoute');
const mobile = require('./routes/mobileRoute');
const user = require('./routes/userRoute')
const createAdmin = require('./createAdmin')
const discount = require('./routes/discount')
app.use(cors());
app.use(book);
app.use(mobile);
app.use(user);
app.use(discount)
connect();
createAdmin();
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('server is running on 3000');
    }
})