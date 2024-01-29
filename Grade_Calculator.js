/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// Variable
var inputScore;
// User input
inputScore = 75;
// calculate grade
var score = inputScore;
if (90 <= score && 100 >= score) {
  console.log("Grade: A");
} else if (80 <= score && 89 >= score) {
  console.log("Grade: B");
} else if (70 <= score && 79 >= score) {
  console.log("Grade: C");
} else if (60 <= score && 79 >= score) {
  console.log("Grade: D");
} else if (0 <= score && 59 >= score) {
  console.log("Grade: F");
} else {
  console.log("Absence");
}
