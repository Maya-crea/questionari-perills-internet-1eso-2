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

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const corregirBtn = document.getElementById('corregirBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    
    if (corregirBtn) {
        corregirBtn.addEventListener('click', corregirRespuestas);
    }
    
    if (limpiarBtn) {
        limpiarBtn.addEventListener('click', limpiarRespuestas);
    }
});
