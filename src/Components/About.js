import React from 'react'

function About() {
  return (
    <div>
      <p>About Page</p>
      
    </div>
  )
}
/**
 * The function takes an array of enrollment data and returns a set of unique course IDs.
 * @param enrollment - Unfortunately, the code snippet you provided is incomplete as it references a
 * variable `enrollments1` that is not defined. Can you please provide the definition of `enrollments1`
 * or the context in which this code is being used?
 * @returns The function `getEnrollment` is returning a Set containing the unique course IDs from the
 * `enrollment` array.
 */
/**
 * The function returns a set of unique enrollment IDs from a given array of enrollment data.
 * @param enrollment - an array of arrays, where each inner array contains a student ID (as a string)
 * and a course name (as a string).
 * @returns The function `getEnrollment` is returning a Set containing unique student IDs from the
 * `enrollments1` array.
 */
const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];
function getEnrollment (enrollment) {
/* `let getSet = new Set();` is creating a new Set object called `getSet`. A Set is a collection of
unique values, meaning that it can only contain one instance of each value. In this case, the Set
will be used to store unique student IDs from the `enrollment` array. */
  let getSet = new Set();
  for (let i = 0; i < enrollment.length; i++) {
    /* `getSet.add(parseInt(enrollment[i][0]))` is adding a new element to the `getSet` Set object. It
    is parsing the first element of the `enrollment` array at index `i` as an integer using
    `parseInt()`, and then adding it to the `getSet` Set object using the `add()` method. This is
    being done in a loop for each element in the `enrollment` array, effectively adding all unique
    student IDs to the `getSet` Set object. */
    getSet.add(parseInt(enrollment[i][0]))
  }
  return getSet;
}
 console.log(getEnrollment(enrollments1))

export default About
