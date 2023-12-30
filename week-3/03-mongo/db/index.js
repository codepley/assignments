const mongoose = require('mongoose');

// Connect to MongoDB
// mongodb+srv://kushal:kushal@cluster0.bkmbsyy.mongodb.net/
mongoose.connect("mongodb+srv://kushal:kushal@cluster0.bkmbsyy.mongodb.net/")
.then(() => {
    console.log("DB Connected");
})
.catch((err) => {
    console.log("Error");
})

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course' 
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}