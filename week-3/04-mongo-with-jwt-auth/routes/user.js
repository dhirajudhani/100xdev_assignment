const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully !!"
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.json({
            msg: "Invalid user please try again !!"
        })
    }
});

router.get('/courses', async (req, res) => {
    const response = await Course.find({})
    res.json({course: response})
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;
    User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourse: courseId
        }
    }).catch((e) => console.log(e))
    res.json({
        msg:"Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.username
    })
    const course = await Course.find({
        _id: {
            "$in" : user.purchasedCourse
        }
    })
    res.json({
        course : course
    })
});

module.exports = router