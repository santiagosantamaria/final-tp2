// var createError = require("http-errors");
// var express = require("express");
const express = require("express");
const app = express();
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

// var indexRouter = require("./routes/index");

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });

// Realizando ISSUE 1 - Peajes - Listar
// Dificultad: 2/3
// Contexto:
// La empresa administradora de los puestos de cobro puede dar de alta la información de
// los puestos de peaje. Tener en cuenta que cada cada cabina de peaje se ubica en una
// dirección geográfica y tiene un numero. Por ejemplo, en la Ruta 3 hay 10 cabinas, cada
// una tiene un numero del 1 al 10.

// module.exports = app;

app.get("/", (req, res) => {
    res.json("hola");
});

app.listen(5555);
