const form = document.querySelector('.form')
const input = document.querySelector('.input')
const error = document.querySelector('.error')

form.onsubmit = () => {
    const email = input.value

    if(isEmail(email)){
        if(form.classList.contains('form-error')){
            form.classList.remove('form-error')
            error.style.display = 'none'
        }
        return false
    }
    else{
        form.classList.add('form-error')
        error.style.display = 'flex'
    }
    
    return false
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}