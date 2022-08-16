
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    const inputTitle = document.querySelector('#title');
    const inputRating = document.querySelector('#rating');
    const inputAwards = document.querySelector('#awards');
    const inputReleaseDate = document.querySelector('#release_date');
    const inputLength = document.querySelector('#length');
    const inputGenreId = document.querySelector('#genre_id');
    const ulErrors = document.querySelector('.errores');
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

    let booleanForm = false
    
    inputTitle.focus();

    inputTitle.addEventListener('blur',(e)=>{
        
        if(e.target.value.trim().length <= 1){
            inputTitle.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>El titulo no debe estar vacío y debe ser mayor a 1 caracter</li>'
            booleanForm = false
        } else {
            inputTitle.classList.remove('is-invalid')
            inputTitle.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanForm = true
        }
        console.log(booleanForm)
    });

    inputRating.addEventListener('blur',(e)=>{
        if(e.target.value < 0 || e.target.value > 10 || e.target.value.trim().length === 0){
            inputRating.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>El rating no debe estar vacío y debe ser entre 1 y 10</li>'
            booleanForm = false
        } else {
            inputRating.classList.remove('is-invalid')
            inputRating.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanForm = true
        }
        console.log(booleanForm)
    });

    inputAwards.addEventListener('blur',(e)=>{
        if(e.target.value < 0 || e.target.value > 10 || e.target.value.trim().length === 0){
            inputAwards.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>Los premios no deben estar vacío y debe ser entre 1 y 10</li>'
            booleanForm = false
        } else {
            inputAwards.classList.remove('is-invalid')
            inputAwards.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanForm = true
        }
        console.log(booleanForm)
    });

    inputReleaseDate.addEventListener('blur',(e)=>{
        console.log(e.target.value)
        if(moment(e.target.value) > moment() || e.target.value.trim().length === 0){
            inputReleaseDate.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>La fecha no debe estar vacia y no debe ser mayor a la fecha actual</li>'
            booleanForm = false
        } else {
            inputReleaseDate.classList.remove('is-invalid')
            inputReleaseDate.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanForm = true
        }
        
    })

    
}