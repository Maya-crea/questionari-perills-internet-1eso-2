// Respuestas correctas del cuestionario
const respuestasCorrectas = {
    p1: 'a',
    p2: 'b',
    p3: 'b',
    p4: 'b',
    p5: 'a',
    p6: 'b',
    p7: 'b',
    p8: 'a',
    p9: 'a',
    p10: 'a'
};

// Función para corregir las respuestas
function corregirRespuestas() {
    let aciertos = 0;
    let errores = 0;
    const preguntas = Object.keys(respuestasCorrectas);
    const resultados = {};

    preguntas.forEach(nombre => {
        const seleccion = document.querySelector(`input[name="${nombre}"]:checked`);
        
        if (seleccion) {
            if (seleccion.value === respuestasCorrectas[nombre]) {
                aciertos += 1;
                resultados[nombre] = 'correcta';
                // Marcar respuesta correcta
                marcarRespuesta(nombre, 'correcta');
            } else {
                errores += 1;
                resultados[nombre] = 'incorrecta';
                // Marcar respuesta incorrecta
                marcarRespuesta(nombre, 'incorrecta');
            }
        } else {
            errores += 1;
            resultados[nombre] = 'no-respondida';
        }
    });

    mostrarResultado(aciertos, preguntas.length);
}

// Función para marcar visualmente las respuestas
function marcarRespuesta(nombrePregunta, estado) {
    const opciones = document.querySelectorAll(`input[name="${nombrePregunta}"]`);
    
    opciones.forEach(opcion => {
        const label = opcion.closest('label');
        
        if (estado === 'correcta') {
            if (opcion.checked) {
                label.style.color = '#27ae60';
                label.style.fontWeight = 'bold';
                label.style.textDecoration = 'underline';
            }
        } else if (estado === 'incorrecta') {
            if (opcion.checked) {
                label.style.color = '#e74c3c';
                label.style.fontWeight = 'bold';
            }
            // Mostrar la respuesta correcta
            if (opcion.value === respuestasCorrectas[nombrePregunta]) {
                label.style.color = '#27ae60';
                label.style.fontWeight = 'bold';
                label.style.textDecoration = 'underline';
            }
        }
    });
}

// Función para mostrar el resultado final
function mostrarResultado(aciertos, total) {
    const resultado = document.getElementById('resultado');
    const porcentaje = Math.round((aciertos / total) * 100);
    
    let mensaje = `Has acertado ${aciertos} de ${total} preguntas (${porcentaje}%)`;
    let color = '#667eea';
    
    // Cambiar color según desempeño
    if (porcentaje === 100) {
        mensaje += ' ¡Excelente! 🎉';
        color = '#27ae60';
    } else if (porcentaje >= 80) {
        mensaje += ' ¡Muy bien! 👍';
        color = '#27ae60';
    } else if (porcentaje >= 60) {
        mensaje += ' Bien, pero repasa los temas 📖';
        color = '#f39c12';
    } else {
        mensaje += ' Necesitas estudiar más 📚';
        color = '#e74c3c';
    }
    
    resultado.textContent = mensaje;
    resultado.style.color = color;
    resultado.style.display = 'block';
}

// Función para limpiar las respuestas
function limpiarRespuestas() {
    // Desmarcar todos los radios
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    
    // Limpiar estilos de las opciones
    document.querySelectorAll('.opcion').forEach(opcion => {
        opcion.style.color = '#333';
        opcion.style.fontWeight = 'normal';
        opcion.style.textDecoration = 'none';
    });
    
    // Limpiar resultado
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').style.display = 'none';
}

// Función para abrir la actividad extra al finalizar
function mostrarActividadExtra() {
    const panel = document.getElementById('actividadPanel');
    if (panel) {
        panel.classList.add('visible');
    }
}

function comprobarActividadExtra() {
    const feedback = document.getElementById('feedbackActividad');
    const contador = document.getElementById('contadorActividad');
    const preguntas = [
        { name: 'actividadPregunta1', correct: 'phishing', texto: 'un phishing' },
        { name: 'actividadPregunta2', correct: 'password', texto: 'una buena práctica para proteger la contraseña' },
        { name: 'actividadPregunta3', correct: 'enlace', texto: 'un enlace sospechoso' },
        { name: 'actividadPregunta4', correct: 'wifi', texto: 'un riesgo en Wi-Fi público' }
    ];

    let aciertos = 0;

    document.querySelectorAll('.opcion-imagen').forEach(opcion => {
        opcion.classList.remove('seleccionada', 'correcta', 'incorrecta');
    });

    preguntas.forEach((pregunta) => {
        const respuesta = document.querySelector(`input[name="${pregunta.name}"]:checked`);
        const opciones = document.querySelectorAll(`input[name="${pregunta.name}"]`);

        opciones.forEach(opcion => {
            const item = opcion.closest('.opcion-imagen');
            if (opcion.value === pregunta.correct) {
                item.classList.add('correcta');
            }
        });

        if (!respuesta) {
            return;
        }

        const opcionSeleccionada = respuesta.closest('.opcion-imagen');
        opcionSeleccionada.classList.add('seleccionada');

        if (respuesta.value === pregunta.correct) {
            aciertos += 1;
            opcionSeleccionada.classList.add('correcta');
        } else {
            opcionSeleccionada.classList.add('incorrecta');
        }
    });

    contador.textContent = `Aciertos: ${aciertos} / ${preguntas.length}`;

    if (aciertos === preguntas.length) {
        feedback.textContent = '¡Perfecto! Has acertado todas las imágenes.';
        feedback.style.color = '#27ae60';
    } else if (aciertos > 0) {
        feedback.textContent = `Has acertado ${aciertos} de ${preguntas.length}. Sigue practicando.`;
        feedback.style.color = '#f39c12';
    } else {
        feedback.textContent = 'Inténtalo de nuevo. Revisa las imágenes y prueba otra vez.';
        feedback.style.color = '#e74c3c';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const corregirBtn = document.getElementById('corregirBtn');
    const abrirActividadBtn = document.getElementById('abrirActividadBtn');
    const comprobarActividadBtn = document.getElementById('comprobarActividadBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const opcionesActividad = document.querySelectorAll('.opcion-imagen');
    
    if (corregirBtn) {
        corregirBtn.addEventListener('click', function() {
            corregirRespuestas();
            mostrarActividadExtra();
        });
    }

    if (abrirActividadBtn) {
        abrirActividadBtn.addEventListener('click', mostrarActividadExtra);
    }

    if (comprobarActividadBtn) {
        comprobarActividadBtn.addEventListener('click', comprobarActividadExtra);
    }

    opcionesActividad.forEach(opcion => {
        const input = opcion.querySelector('input[type="radio"]');
        input.addEventListener('change', function() {
            const grupo = input.name;
            document.querySelectorAll(`input[name="${grupo}"]`).forEach(item => {
                item.closest('.opcion-imagen').classList.remove('seleccionada');
            });
            opcion.classList.add('seleccionada');
        });
    });
    
    if (limpiarBtn) {
        limpiarBtn.addEventListener('click', limpiarRespuestas);
    }
});
