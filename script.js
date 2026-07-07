const tematicas = {
    internet: {
        id: 'internet',
        title: 'Seguridad en Internet',
        description: 'Reconoce los peligros más comunes en la red.',
        questions: [
            {
                prompt: '¿Qué es un phishing?',
                answer: 'a',
                options: [
                    { label: 'Un ataque que intenta engañar para robar datos', value: 'a' },
                    { label: 'Un programa para limpiar el ordenador', value: 'b' },
                    { label: 'Un navegador web', value: 'c' },
                    { label: 'Un tipo de antivirus', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué debes hacer si recibes un mensaje sospechoso?',
                answer: 'b',
                options: [
                    { label: 'Abrirlo y responder', value: 'a' },
                    { label: 'Borrarlo y no hacer clic', value: 'b' },
                    { label: 'Compartirlo con todos', value: 'c' },
                    { label: 'Descargarlo para revisarlo', value: 'd' }
                ]
            },
            {
                prompt: '¿Por qué son peligrosas las contraseñas débiles?',
                answer: 'b',
                options: [
                    { label: 'Son difíciles de recordar', value: 'a' },
                    { label: 'Son fáciles de adivinar o romper', value: 'b' },
                    { label: 'Hacen más lenta la conexión', value: 'c' },
                    { label: 'No tienen ningún riesgo', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué significa descargar software de fuentes desconocidas?',
                answer: 'b',
                options: [
                    { label: 'Es siempre seguro', value: 'a' },
                    { label: 'Puede contener malware', value: 'b' },
                    { label: 'Mejora el rendimiento', value: 'c' },
                    { label: 'Solo sirve para juegos', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué recomendación es correcta para navegar con seguridad?',
                answer: 'a',
                options: [
                    { label: 'Mantener el software actualizado', value: 'a' },
                    { label: 'Desactivar todas las actualizaciones', value: 'b' },
                    { label: 'Abrir cualquier adjunto', value: 'c' },
                    { label: 'Compartir contraseñas por chat', value: 'd' }
                ]
            }
        ]
    },
    contrasenas: {
        id: 'contrasenas',
        title: 'Contraseñas seguras',
        description: 'Practica cómo crear claves más fuertes y resistentes.',
        questions: [
            {
                prompt: '¿Cuál es una contraseña más segura?',
                answer: 'b',
                options: [
                    { label: '123456', value: 'a' },
                    { label: 'M4r!a2026!', value: 'b' },
                    { label: 'password', value: 'c' },
                    { label: 'nombre123', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué conviene hacer con cada cuenta?',
                answer: 'a',
                options: [
                    { label: 'Usar una clave distinta', value: 'a' },
                    { label: 'Repetir siempre la misma', value: 'b' },
                    { label: 'Escribirla en un papel visible', value: 'c' },
                    { label: 'Compartirla con amigos', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué es mejor para proteger una cuenta?',
                answer: 'b',
                options: [
                    { label: 'No cambiarla nunca', value: 'a' },
                    { label: 'Activar la verificación en dos pasos', value: 'b' },
                    { label: 'Compartirla con el profesor', value: 'c' },
                    { label: 'Guardar la contraseña en el navegador sin más', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué es una contraseña fuerte?',
                answer: 'c',
                options: [
                    { label: 'Muy corta', value: 'a' },
                    { label: 'Con solo letras', value: 'b' },
                    { label: 'Larga y con números y símbolos', value: 'c' },
                    { label: 'La misma para todo', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué debes hacer si sospechas que tu contraseña ha sido comprometida?',
                answer: 'a',
                options: [
                    { label: 'Cambiarla inmediatamente', value: 'a' },
                    { label: 'Esperar a que pase el problema', value: 'b' },
                    { label: 'Enviar la contraseña por chat', value: 'c' },
                    { label: 'Olvidarte de la cuenta', value: 'd' }
                ]
            }
        ]
    },
    ciberacoso: {
        id: 'ciberacoso',
        title: 'Ciberacoso y privacidad',
        description: 'Aprende a cuidar tu imagen y tus datos online.',
        questions: [
            {
                prompt: '¿Qué es el ciberacoso?',
                answer: 'b',
                options: [
                    { label: 'Una forma de estudiar', value: 'a' },
                    { label: 'Un tipo de acoso que ocurre en Internet', value: 'b' },
                    { label: 'Un juego de ordenador', value: 'c' },
                    { label: 'Una red social nueva', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué harías si alguien te molesta en línea?',
                answer: 'a',
                options: [
                    { label: 'Contarlo a un adulto de confianza', value: 'a' },
                    { label: 'Responder con más insultos', value: 'b' },
                    { label: 'Publicar más información', value: 'c' },
                    { label: 'Ignorarlo sin hacer nada', value: 'd' }
                ]
            },
            {
                prompt: '¿Cuál es una buena práctica de privacidad?',
                answer: 'c',
                options: [
                    { label: 'Compartir tu dirección completa', value: 'a' },
                    { label: 'Poner todos tus datos públicos', value: 'b' },
                    { label: 'Configurar quién puede ver tu información', value: 'c' },
                    { label: 'Aceptar solicitudes de desconocidos', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué debes hacer antes de subir una foto?',
                answer: 'b',
                options: [
                    { label: 'Subirla sin pensar', value: 'a' },
                    { label: 'Comprobar si revela información privada', value: 'b' },
                    { label: 'Mandarla a todos tus contactos', value: 'c' },
                    { label: 'Ponerla con la ubicación exacta', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué ayuda a cuidar tu privacidad online?',
                answer: 'a',
                options: [
                    { label: 'Ajustar la configuración de privacidad', value: 'a' },
                    { label: 'Compartir la contraseña con todo el mundo', value: 'b' },
                    { label: 'Aceptar todos los términos sin leer', value: 'c' },
                    { label: 'Publicar datos personales en grupo', value: 'd' }
                ]
            }
        ]
    },
    huellaDigital: {
        id: 'huellaDigital',
        title: 'Huella digital',
        description: 'Comprende cómo dejamos rastros cuando usamos Internet.',
        questions: [
            {
                prompt: '¿Qué es la huella digital?',
                answer: 'b',
                options: [
                    { label: 'La firma que dejamos al escribir', value: 'a' },
                    { label: 'El rastro de datos que dejamos al usar Internet', value: 'b' },
                    { label: 'Un programa de seguridad', value: 'c' },
                    { label: 'Un tipo de contraseña', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué puede formar parte de tu huella digital?',
                answer: 'a',
                options: [
                    { label: 'Tus publicaciones, búsquedas y fotos compartidas', value: 'a' },
                    { label: 'Solo tu nombre de usuario', value: 'b' },
                    { label: 'Solo tu número de móvil', value: 'c' },
                    { label: 'Solo los mensajes de WhatsApp', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué es una buena práctica para reducir tu huella digital?',
                answer: 'c',
                options: [
                    { label: 'Compartir todo en redes', value: 'a' },
                    { label: 'Poner datos privados en publicaciones', value: 'b' },
                    { label: 'Revisar qué compartes y con quién', value: 'c' },
                    { label: 'Aceptar solicitudes de desconocidos', value: 'd' }
                ]
            },
            {
                prompt: '¿Por qué es importante cuidar tu huella digital?',
                answer: 'b',
                options: [
                    { label: 'Porque no afecta a nada', value: 'a' },
                    { label: 'Porque puede influir en tu reputación y privacidad', value: 'b' },
                    { label: 'Porque solo sirve para los adultos', value: 'c' },
                    { label: 'Porque desaparece al cerrar sesión', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué harías para cuidar mejor tu huella digital?',
                answer: 'a',
                options: [
                    { label: 'Pensar antes de publicar y revisar la privacidad', value: 'a' },
                    { label: 'Poner todos los datos públicos', value: 'b' },
                    { label: 'Compartir contraseñas con amigos', value: 'c' },
                    { label: 'Aceptar todas las condiciones sin leer', value: 'd' }
                ]
            }
        ]
    },
    redesSociales: {
        id: 'redesSociales',
        title: 'Redes sociales',
        description: 'Aprende a usar las redes con seguridad y responsabilidad.',
        questions: [
            {
                prompt: '¿Qué debes hacer antes de aceptar una solicitud de alguien desconocido?',
                answer: 'b',
                options: [
                    { label: 'Aceptar sin mirar', value: 'a' },
                    { label: 'Comprobar quién es y si es de confianza', value: 'b' },
                    { label: 'Compartir datos para ser amable', value: 'c' },
                    { label: 'Publicar una foto para ver si es real', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué es mejor para proteger tu cuenta?',
                answer: 'a',
                options: [
                    { label: 'Usar una contraseña fuerte y privada', value: 'a' },
                    { label: 'Compartirla con amigos', value: 'b' },
                    { label: 'Poner la misma en todas las apps', value: 'c' },
                    { label: 'Escribirla en la biografía', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué conviene hacer antes de subir una publicación?',
                answer: 'c',
                options: [
                    { label: 'Subirla enseguida sin revisar', value: 'a' },
                    { label: 'Ponerla en modo público siempre', value: 'b' },
                    { label: 'Pensar si revela información personal', value: 'c' },
                    { label: 'Compartirla con todos los contactos', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué debes hacer si alguien te molesta en una red social?',
                answer: 'b',
                options: [
                    { label: 'Responder con más agresividad', value: 'a' },
                    { label: 'Contarlo a un adulto de confianza y bloquearlo', value: 'b' },
                    { label: 'Compartirlo en todos los grupos', value: 'c' },
                    { label: 'Hacer capturas y enviarlas a todos', value: 'd' }
                ]
            },
            {
                prompt: '¿Por qué es importante revisar la configuración de privacidad?',
                answer: 'a',
                options: [
                    { label: 'Porque puedes controlar quién ve tus datos', value: 'a' },
                    { label: 'Porque no cambia nada', value: 'b' },
                    { label: 'Porque solo sirve para adultos', value: 'c' },
                    { label: 'Porque es obligatorio publicar todo', value: 'd' }
                ]
            }
        ]
    },
    inteligenciaArtificial: {
        id: 'inteligenciaArtificial',
        title: 'Inteligencia artificial',
        description: 'Descubre cómo usar la IA con criterio y seguridad.',
        questions: [
            {
                prompt: '¿Qué es la inteligencia artificial?',
                answer: 'b',
                options: [
                    { label: 'Un tipo de ordenador antiguo', value: 'a' },
                    { label: 'Una tecnología que permite aprender y tomar decisiones', value: 'b' },
                    { label: 'Un programa para llamar por teléfono', value: 'c' },
                    { label: 'Una red social nueva', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué conviene hacer antes de confiar en una respuesta de la IA?',
                answer: 'a',
                options: [
                    { label: 'Comprobarla y pensar críticamente', value: 'a' },
                    { label: 'Aceptar todo sin revisar', value: 'b' },
                    { label: 'Compartirla sin más', value: 'c' },
                    { label: 'Publicarla en redes', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué datos conviene proteger al usar IA?',
                answer: 'c',
                options: [
                    { label: 'Solo el nombre de usuario', value: 'a' },
                    { label: 'Solo la contraseña', value: 'b' },
                    { label: 'Datos personales y sensibles', value: 'c' },
                    { label: 'Solo las fotos de perfil', value: 'd' }
                ]
            },
            {
                prompt: '¿Por qué es importante revisar el uso de la IA?',
                answer: 'b',
                options: [
                    { label: 'Porque no sirve para nada', value: 'a' },
                    { label: 'Porque puede dar respuestas incorrectas o sesgadas', value: 'b' },
                    { label: 'Porque siempre es perfecta', value: 'c' },
                    { label: 'Porque solo se usa en clase', value: 'd' }
                ]
            },
            {
                prompt: '¿Qué actitud es la más adecuada al usar IA?',
                answer: 'a',
                options: [
                    { label: 'Usarla con criterio y responsabilidad', value: 'a' },
                    { label: 'Confiar ciegamente en todo', value: 'b' },
                    { label: 'Compartir datos privados sin pensar', value: 'c' },
                    { label: 'Usarla para engañar a otros', value: 'd' }
                ]
            }
        ]
    }
};

function renderMenu() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Cuestionarios de seguridad digital</h1>
        <p class="intro">Elige una temática para empezar.</p>
        <div class="menu-grid">
            ${Object.values(tematicas).map(tema => `
                <button class="menu-card" data-tema-id="${tema.id}">
                    <h2>${tema.title}</h2>
                    <p>${tema.description}</p>
                    <span>Empezar →</span>
                </button>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.menu-card').forEach(button => {
        button.addEventListener('click', () => renderTema(button.dataset.temaId));
    });
}

function renderTema(temaId) {
    const tema = tematicas[temaId];
    if (!tema) {
        renderMenu();
        return;
    }

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="quiz-header">
            <div>
                <button class="back-btn" id="volverMenuBtn">← Volver al menú</button>
                <h1>${tema.title}</h1>
                <p>${tema.description}</p>
            </div>
        </div>
        <form id="quizForm">
            ${tema.questions.map((pregunta, index) => `
                <div class="pregunta">
                    <p>${index + 1}. ${pregunta.prompt}</p>
                    ${pregunta.options.map(opcion => `
                        <label class="opcion">
                            <input type="radio" name="q${index + 1}" value="${opcion.value}" />
                            ${opcion.label}
                        </label>
                    `).join('')}
                </div>
            `).join('')}
            <div class="acciones">
                <button type="submit">Enviar respuestas</button>
                <button type="button" id="corregirBtn">Corregir</button>
            </div>
            <div id="resultado" class="resultado"></div>
        </form>
    `;

    document.getElementById('volverMenuBtn').addEventListener('click', renderMenu);
    document.getElementById('quizForm').addEventListener('submit', (event) => {
        event.preventDefault();
        corregirRespuestas(tema);
    });
    document.getElementById('corregirBtn').addEventListener('click', () => corregirRespuestas(tema));
}

function corregirRespuestas(tema) {
    document.querySelectorAll('.opcion').forEach(opcion => {
        opcion.classList.remove('correcta', 'incorrecta');
    });

    let aciertos = 0;
    const total = tema.questions.length;

    tema.questions.forEach((pregunta, index) => {
        const seleccion = document.querySelector(`input[name="q${index + 1}"]:checked`);
        const opciones = document.querySelectorAll(`input[name="q${index + 1}"]`);

        opciones.forEach(opcion => {
            const label = opcion.closest('label');
            if (opcion.value === pregunta.answer) {
                label.classList.add('correcta');
            }
        });

        if (seleccion && seleccion.value === pregunta.answer) {
            aciertos += 1;
        } else if (seleccion) {
            seleccion.closest('label').classList.add('incorrecta');
        }
    });

    mostrarResultado(aciertos, total);
}

function mostrarResultado(aciertos, total) {
    const resultado = document.getElementById('resultado');
    const porcentaje = Math.round((aciertos / total) * 100);
    let mensaje = `Has acertado ${aciertos} de ${total} preguntas (${porcentaje}%)`;
    let color = '#667eea';

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
    resultado.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', renderMenu);
