const {Admin} = require('../db/index')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    console.log('here');
    const {username, password} = req.headers;
    console.log(req.headers);
    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value) {
        if(value) {
            console.log("value: ", value);
            next();
        } else {
            res.status(403).json({
                msg: "User does not exist"
            })
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = adminMiddleware;