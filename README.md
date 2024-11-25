# Grade School Roster

This project implements a Grade School Roster in TypeScript. It allows you to add students to different grades, retrieve a list of students in a specific grade, and get a sorted list of all students in the school.

## Instructions

Given students' names along with the grade that they are in, create a roster for the school.

**Features:**

* **Add a student to a grade:**
    * Example: "Add Jim to grade 2."
    * Response: "OK."
* **Get a list of all students enrolled in a grade:**
    * Example: "Which students are in grade 2?"
    * Response: "We've only got Jim just now."
* **Get a sorted list of all students in all grades:**
    * Grades should sort as 1, 2, 3, etc.
    * Students within a grade should be sorted alphabetically by name.
    * Example: "Who all is enrolled in school right now?"
    * Response: "Let me think. We have Anna, Barb, and Charlie in grade 1, Alex, Peter, and Zoe in grade 2 and Jim in grade 5. So the answer is: Anna, Barb, Charlie, Alex, Peter, Zoe and Jim"


**Rules:**

* All students have only one name.
* Each student can be added only once to a grade.
* Adding the same student more than once should be handled gracefully.

## Getting Started

1. **Clone the repository:**
   ```bash
   npm install
   npm test