const validar = document.getElementById('validar');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

//botão de validar

validar.addEventListener('click', (event) =>{
    event.preventDefault
    nameValidate();
    lastnameValidate();
    yearValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
})

//erros vermelhos
function setError(index){
    campos[index].style.outline = 'none';
    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    spans[index].style.display = 'none';
    campos[index].style.border = '';
    campos[index].style.outline = '1px solid #6c63ff';
}

function nameValidate(){
    if(campos[0].value.length <3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}
function lastnameValidate(){
    if(campos[1].value.length <3)
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
    
}
function yearValidate(){
    if(campos[3].value <14 || campos[3].value >100)
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
    
}

function mainPasswordValidate(){
    if(campos[4].value.length <8)
    {
        setError(4);
    }
    else
    {
        removeError(4);
        comparePassword();
    }
    
}

function comparePassword(){
    if(campos[4].value == campos[5].value && campos[5].value.length >=8)
    {
        removeError(5);
    }
    else
    {
        setError(5);
    }
    
}
