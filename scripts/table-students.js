
let arrayPaginacion = [];
let studentsLS = [];
let from = 0;
let activePage = 1;
let rowLimit = 3; 
let totalPages;
let students;



studentsLS = JSON.parse(localStorage.getItem("students"));


const calculeTotalPages = (list) =>  Math.ceil(list.length/rowLimit);

const loadPaginationItem = ( ) => {
    document.querySelector('#items').innerHTML = '';
    for(let i = 0; i< totalPages ; i++){
        const item = document.createElement('li');
        item.classList = `page-item ${activePage == i + 1 ? "active" : ""}`; 
        const link = `<button class="button_paginacion" onclick="pagination(${i})" id="pag{${i}}">${i + 1}</button>`;
        item.innerHTML = link; 
        document.querySelector('#items').append(item);
    }
}


const modificarArreglo = () => {
    arrayPaginacion = students.slice(from, rowLimit * activePage);
    renderTable(arrayPaginacion)
}


const renderTable = (list) => {
    
    const tbody = document.getElementById('table');

    tbody.innerHTML = '';

    list.map((student)=>{
        const row = document.createElement('tr');
        row.setAttribute('key',student.fileNumber);
        row.innerHTML = `<td>${student.fileNumber}</td>
                         <td>${student.name}</td>
                         <td>${student.lastName}</td>`;
        tbody.appendChild(row);
        
    })
    loadPaginationItem();
    
};

const pagination = (page) => {  
    activePage = page + 1;
    from = rowLimit * page;
    if(from <= students.length){
       modificarArreglo();
    }
}


if(studentsLS) {
    students = studentsLS
    totalPages = calculeTotalPages(students);
    loadPaginationItem();
    modificarArreglo();
}


const search = (e) => {
    e.preventDefault();
    const inputSearch= document.getElementById('searchByLastName').value.toLocaleLowerCase(); 
    const list = students.filter((person) => person.lastName && person.lastName.toLocaleLowerCase().includes(inputSearch));

    document.getElementById('searchByLastName').value = null;

    renderTable(list)
}

const controlSearch = ()=>{}

const paginationSelect = () =>{
    const option = document.getElementById('pagination-select').value;
    console.log(option);
    
    rowLimit = option;
    totalPages = calculeTotalPages(students);
    loadPaginationItem();
    modificarArreglo();
        
}