const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const admin = await Admin.find({
        username,
        password
    })
    if(admin){
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg: "Invalid username and password"
        })
    }
    
 
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink

    const newCourse = Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({msg: "Course created successfully", courseId: newCourse._id})
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({course: response})
});

module.exports = router;