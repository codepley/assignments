const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    await User.create({
        username,
        password
    })

    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const user = await User.findOne({username: req.headers.username});
    user.purchasedCourses.push(courseId);
    user.save();

    // Another way with updateOne (check for its syntax)
    // User.updateOne({
    //     username: req.headers.username
    // }, {
    //     purchasedCourses: {
    //         "$push": courseId
    //     }
    // })

    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({username}).populate('purchasedCourses');
    console.log(user.purchasedCourses);
    res.json({
        msg: "hi there"
    })
});

module.exports = router