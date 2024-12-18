const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDB = require("./db"); // Import your database connection

const app = express();

const port = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});