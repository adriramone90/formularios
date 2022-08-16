
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

    let booleanTitle = false
    let booleanRating = false
    let booleanAwards = false
    let booleanReleaseDate = false
    let booleanLength = false
    let booleanGenreId = false
    
    inputTitle.focus();

    inputTitle.addEventListener('blur',(e)=>{
        
        if(e.target.value.trim().length <= 1){
            inputTitle.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>El titulo no debe estar vacío y debe ser mayor a 1 caracter</li>'
        } else {
            inputTitle.classList.remove('is-invalid')
            inputTitle.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanTitle = true
        }
        console.log(booleanTitle)
    });

    inputRating.addEventListener('blur',(e)=>{
        if(e.target.value < 0 || e.target.value > 10 || e.target.value.trim().length === 0){
            inputRating.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>El rating no debe estar vacío y debe ser entre 1 y 10</li>'
        } else {
            inputRating.classList.remove('is-invalid')
            inputRating.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanRating = true
        }
        
    });

    inputAwards.addEventListener('blur',(e)=>{
        if(e.target.value < 0 || e.target.value > 10 || e.target.value.trim().length === 0){
            inputAwards.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>Los premios no deben estar vacío y debe ser entre 1 y 10</li>'
        } else {
            inputAwards.classList.remove('is-invalid')
            inputAwards.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanAwards = true
        }
        
    });

    inputReleaseDate.addEventListener('blur',(e)=>{
        console.log(e.target.value)
        if(moment(e.target.value) > moment() || e.target.value.trim().length === 0){
            inputReleaseDate.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>La fecha no debe estar vacia y no debe ser mayor a la fecha actual</li>'
            
        } else {
            inputReleaseDate.classList.remove('is-invalid')
            inputReleaseDate.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanReleaseDate = true
        }
    });

    inputLength.addEventListener('blur',(e)=>{
        if(!(typeof e.target.value === 'number') || e.target.value < 60 || e.target.value > 360){
            inputLength.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>La duración no debe estar vacía y debe ser un número</li>'
        } else {
            inputLength.classList.remove('is-invalid')
            inputLength.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanLength = true
        }
    });

    inputGenreId.addEventListener('blur',(e)=>{
        if(e.target.value === ''){
            inputGenreId.classList.add('is-invalid')
            ulErrors.innerHTML += '<li>Debe seleccionar una categoría</li>'
        } else {
            inputGenreId.classList.remove('is-invalid')
            inputGenreId.classList.add('is-valid')
            ulErrors.innerHTML = ''
            booleanGenreId = true
        }

        formulario.addEventListener('submit',(e)=>{
            e.preventDefault();
            if(booleanGenreId && booleanLength && 
                booleanReleaseDate && booleanAwards &&
                booleanTitle && booleanRating){
                    ulErrors.innerHTML = ''
                    formulario.submit()
                } else {
                    ulErrors.innerHTML = '<li>Debe completar los campos vacios</li>'
                }
        })
    })

}