// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);   

window.addEventListener('load', init);

function init() {
    // let empId= $('id');
    // let ext = $('ext');
    // let email = $('email');
    // let dept = $('department') ;
    // let name = $('name');    

    $('submit').addEventListener('click', () => {
        console.log(`ID: ${$('id').value}`);
        console.log(`Name: ${$('name').value}`);
        console.log(`Extension: ${$('ext').value}`);
        console.log(`Email: ${$('email').value} `);
        console.log(`Department: ${$('department').value}`);        
    });    
    $('empForm').addEventListener('submit',(e) =>{
        e.preventDefault();
        e.stopPropagation();            
    });
}

