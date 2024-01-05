
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.code === 11000) {
        err.message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err.statusCode = 400;
    }

    if (err.name === "JsonWebTokenError") {
        err.message = `Json Web Token is Invalid, Try again`;
        err.statusCode = 400;
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        error: err.stack 
    });
};
