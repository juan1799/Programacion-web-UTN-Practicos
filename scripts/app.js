let students = [];
let studentsLS = [];

studentsLS = JSON.parse(localStorage.getItem("students"));

if(studentsLS) {
    students = studentsLS
}

const addPersona = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const fileNumber = Math.floor(Math.random() * 90000) + 10000;
    console.log(lastName);
    
    students.push({ name, lastName, fileNumber});
    
    localStorage.setItem("students", JSON.stringify(students));
    
    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;
};


