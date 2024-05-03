function mostrarDatos () {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if(nombre === '' ||  email === ''){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos'
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Datos del Formulario',
        html: 'Nombre: ' + nombre + '<br>Email ' + email
    });

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = '<h2>Datos del Formulario:</h2>'+
    '<p><strong>Nombre:</strong>' + nombre + '</p>'+
    '<p><strong>Email:</strong>' + email + '</p>';

    // Limpiar el formulario
    document.getElementById("miFormulario").reset();
}