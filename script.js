// Part 1: Understanding and Creating Objects
const student = {
    Student: "Muhammad Hashim Ali",
    Age: 23,
    Enrolled: true,
    Courses: ["Math", " Music", " French", " Physics", " Programming I", " Chemistry"],

    displayBasicInfo: function () {
        console.log(`Enrollement Status: ${this.Enrolled},\nCourses: ${this.Courses}`);
    }
};

console.log("\n") //LOG part 1
console.log("Student: " + student.Student + "\n" + "Age: " + student.Age);
student.displayBasicInfo();
console.log("\n");

// Part 2: Working with JSON
const studentJSON = JSON.stringify(student);
console.log("JSON String");
console.log