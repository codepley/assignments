const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    // check if user already exist in db

    await Admin.create({
        username: username,
        password: password 
    })

    res.json({
        message: "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const createdCourse = await Course.create({
        title,
        imageLink,
        description,
        price
    })

    res.status(200).json({ message: 'Course created successfully', courseId: createdCourse.id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    console.log(courses);
    res.json({course: courses});
});

module.exports = router;