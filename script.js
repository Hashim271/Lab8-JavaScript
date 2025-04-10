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
const studentJSON = JSON.stringify(student); //stringify
console.log("JSON String");
console.log(studentJSON);

const parsedStudent = JSON.parse(studentJSON); //parsed 
console.log("\nParsed Object: ");
console.log(parsedStudent);

console.log("\nComparison: "); //Comparing to original
console.log("Same Structure?", JSON.stringify(student) === JSON.stringify(parsedStudent));
console.log("Same object reference?", student === parsedStudent);
console.log("\n");

// Part 3: Using Destructuring Assignment
const {Student: name, Courses } = student;
console.log("Name: ", name);
console.log("Courses ", Courses);
console.log("\n");

const scores = [42, 0, 69, 77, 99]; //Scores Array
const [firstScore, secondScore] = scores;
console.log("First Score: ", firstScore); //42
console.log("Second Score: ", secondScore); //0
console.log("\n");

// Part 4: The Spread Operator
const clonedStudent = { ...student}; //Cloned

// Graduation year added
const updatedStudent = {
    ...clonedStudent,
    graduationYear: 2028
};

console.log("Update on Student: ");
console.log(updatedStudent); //has function on terminal
console.log("\n");

// Part 5: Object Methods
const newCourses = ["Algorithms", "Operating System", "Database Structures"];
const mergedCourses = [...student.Courses, ...newCourses];

console.log("\nMerged Courses: ");
console.log(mergedCourses);
console.log("\n");