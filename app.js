require('dotenv').config();
require('express-async-errors');

const express = require("express");
const session = require("express-session")
const MongoStore = require("connect-mongo")
const cors = require('cors');
const connectDB = require("./db/connect");
const peopleRouter = require("./routes/people");
const faultsRouter = require("./routes/faults");
const accountsRouter = require("./routes/accounts");
const authRouter = require("./routes/auth");
const { collection } = require('./models/Person');

const app = express();
app.use(express.json());
app.use(cors());

// Configure sessions
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            collectionName: "sessions",
        }),
        cookie: {
            maxAge: 1000 * 60 *60 * 24, // 1 day
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        },
    })
);

// Register routes
app.use("/api/v1", peopleRouter);
app.use("/api/v1/faults", faultsRouter);
app.use("/api/v1/accounts", accountsRouter);
app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("Server listening on port " + port);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
