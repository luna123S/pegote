function comprobar()                                                               {
document.getElementById('brutos').value = 'lo que sea'
}

function alimento()     {
    let cosa = document.getElementById('alimento').value
    console.log(cosa)
}


    if(alimento == 'gaseosa cero'){
        document.getElementById ('diagnostico').innerHTML = 'no es saludable'
    }

    if(alimento == 'pizza'){
        document.getElementById('diagnostico').innerHTML = 'no es saludable'   
    }

    if(alimento == 'verduras'){
        document.getElementById ('diagnostico').innerHTML = 'si es saludable'   
    }

    if(alimento == 'cereales'){
        document.getElementById ('diagnostico').innerHTML = 'no es saludable'   
    } 
        

    if(alimento == 'carne'){
        document.getElementById ('diagnostico').innerHTML = 'si es saludable'  
    }  
    
    