// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students = JSON.parse(localStorage.getItem("students")) || []; 

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll,
    });

    localStorage.setItem("students", JSON.stringify(students));

    return { name, age, roll };
};