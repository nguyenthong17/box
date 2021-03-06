// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

const { isAuthenticated } = require("./middleware/verifyToken");

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js

const cusSignup = require("./routes/customerSignup");
app.use("/signup", cusSignup);

const authRoutes = require("./routes/authentication/auth");
app.use("/auth", authRoutes);

const loginRoutes = require("./routes/login");
app.use("/login", loginRoutes);

const driverRoutes = require("./routes/driver");
app.use("/driver", isAuthenticated, driverRoutes);

const adminRoutes = require("./routes/admin");
app.use("/admin", isAuthenticated, adminRoutes);

const customerRoute = require("./routes/customer");
app.use("/customer", isAuthenticated, customerRoute); //need to protect the link after development❗❗❗❗❗

const path = require("path");
app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
