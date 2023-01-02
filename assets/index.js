const imput = document.querySelector('#nome');
const imputEmail = document.querySelector('#email');
const imputText = document.querySelector('#text');
const formulario = document.querySelector('form');

imput.addEventListener("change", (event) => console.log(event.target.value));
imputEmail.addEventListener("change", (event) => console.log(event.target.value));
imputText.addEventListener("change", (event) => console.log(event.target.value));
formulario.addEventListener('submit', (form) => {
    form.preventDefault();
    console.log(form)
    /* formulario.reset(); */

    /* if (nome.value === ''){
        alert ("Este campo deve ser preenchido") */
    const [nome, sobrenome] = imput.value.split(" ");

    if (nome == null || sobrenome == null) {
        alert("por favor informe o nome completo") && form.preventDefault();
        return;
    }

    const { elements } = form.target;   
    const result = [] 

    for (const element of elements) {
        result.push(`${element.name}: ${element.value}`);
    }

    console.log(result);

});


