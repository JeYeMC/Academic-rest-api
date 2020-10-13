/** packages */

const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** configuracion de la app */

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    {extended : true}
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Metodos */

app.get("/",(req,res,next) =>{
    res.send("Welcome to academic rest api");
});

// User routes loading
const userRoutes = require("./routes/user.routes");
userRoutes(app);

/* token middleware */
tkFn = require("./middleware/verifyToken");
app.use(tkFn);

// Student routes loading
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

// Teacher routes loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

// Course routes loading
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

// Period routes loading
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);


app.listen(port, () =>{
    console.log("server is running...");
});