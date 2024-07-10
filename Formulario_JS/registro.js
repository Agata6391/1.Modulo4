document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
//Constantes
    let valid = true;

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    //Mensajes de error aqui 
    document.getElementById('error-nombre').innerText = '';
    document.getElementById('error-email').innerText = '';
    document.getElementById('error-password').innerText = '';
    document.getElementById('error-confirmPassword').innerText = '';

    // ComoValidar aqui y disparar error aqui 
    if (!nombre) {
        document.getElementById('error-nombre').innerText = 'Requerido';
        valid = false;
    }

    if (!email) {
        document.getElementById('error-email').innerText = 'Requerido';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('error-email').innerText = 'Email invalido';
        valid = false;
    }

    if (!password) {
        document.getElementById('error-password').innerText = 'Requerido';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('error-password').innerText = 'Debe tener al menos 6 caracteres';
        valid = false;
    }

    if (!confirmPassword) {
        document.getElementById('error-confirmPassword').innerText = 'Requerido';
        valid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('error-confirmPassword').innerText = 'Las contraseñas deben de coincidir';
        valid = false;
    }

    if (valid) {
        console.log('Formulario enviado');
        console.log({ nombre, email, password, confirmPassword });
    }
});