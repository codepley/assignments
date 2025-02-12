const jwt = require('jsonwebtoken')
const secret = require('../index.js')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, secret);
    console.log(verifyToken)

    next();
}

module.exports = adminMiddleware;