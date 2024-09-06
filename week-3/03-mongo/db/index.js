const mongoose = require('mongoose');
// 

// Connect to MongoDB
mongoose.connect('your url;');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId, // it will take id from course table and store in user table
        ref: "Course" // refering a course table / collection
    }]
});

const CourseSchema = new mongoose.Schema({
   title: String,
   description: String,
   imageLink: String,
   price: Number
});

const Admin = mongoose.model('Admin', AdminSchema); //create model of each table as after creating the schema
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}