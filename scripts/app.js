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

    controlPersona(name,lastName,fileNumber);

};


const controlPersona = (name,lastName,fileNumber) =>{
    
    if (typeof name==='string' && typeof lastName==='string' && isNaN(name) && isNaN(lastName)) {
        
        students.push({name,lastName,fileNumber}) ;
        console.log(students);
        
        localStorage.setItem("students", JSON.stringify(students));
        swal("Listo","Datos validados",'success');
    } else {
        swal("Error","Datos no validos",'error');
    }

    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;
}


