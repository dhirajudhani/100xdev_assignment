const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await Admin.findOne({username: username});
    if(existingUser) {
        return res.status(400).json({msg: "Admin already exist please try to login"})
    }
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created succesfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    console.log(newCourse)
    res.json({msg: "Course created succesfully", courseId: newCourse._id})

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    console.log(response)
    res.json({courses: response})
});

module.exports = router;