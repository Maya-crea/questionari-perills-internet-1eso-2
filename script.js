const estado = {
    idioma: 'es',
    temaActual: null
};

const tematicas = {
    internet: {
        id: 'internet',
        title: { es: 'Seguridad en Internet', ca: 'Seguretat a Internet' },
        description: { es: 'Reconoce los peligros más comunes en la red.', ca: 'Reconeix els perills més comuns a la xarxa.' },
        questions: [
            {
                prompt: { es: '¿Qué es un phishing?', ca: 'Què és un phishing?' },
                answer: 'a',
                options: [
                    { label: { es: 'Un ataque que intenta engañar para robar datos', ca: 'Un atac que intenta enganyar per robar dades' }, value: 'a' },
                    { label: { es: 'Un programa para limpiar el ordenador', ca: 'Un programa per netejar l’ordinador' }, value: 'b' },
                    { label: { es: 'Un navegador web', ca: 'Un navegador web' }, value: 'c' },
                    { label: { es: 'Un tipo de antivirus', ca: 'Un tipus d’antivirus' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué debes hacer si recibes un mensaje sospechoso?', ca: 'Què has de fer si rebeixes un missatge sospitós?' },
                answer: 'b',
                options: [
                    { label: { es: 'Abrirlo y responder', ca: 'Obrir-lo i respondre' }, value: 'a' },
                    { label: { es: 'Borrarlo y no hacer clic', ca: 'Esborrar-lo i no fer clic' }, value: 'b' },
                    { label: { es: 'Compartirlo con todos', ca: 'Compartir-lo amb tothom' }, value: 'c' },
                    { label: { es: 'Descargarlo para revisarlo', ca: 'Descarregar-lo per revisar-lo' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Por qué son peligrosas las contraseñas débiles?', ca: 'Per què són perilloses les contrasenyes febles?' },
                answer: 'b',
                options: [
                    { label: { es: 'Son difíciles de recordar', ca: 'Són difícils de recordar' }, value: 'a' },
                    { label: { es: 'Son fáciles de adivinar o romper', ca: 'Són fàcils d’endevinar o trencar' }, value: 'b' },
                    { label: { es: 'Hacen más lenta la conexión', ca: 'Fan més lenta la connexió' }, value: 'c' },
                    { label: { es: 'No tienen ningún riesgo', ca: 'No tenen cap risc' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué significa descargar software de fuentes desconocidas?', ca: 'Què significa descarregar programari de fonts desconegudes?' },
                answer: 'b',
                options: [
                    { label: { es: 'Es siempre seguro', ca: 'És sempre segur' }, value: 'a' },
                    { label: { es: 'Puede contener malware', ca: 'Pot contenir programari maliciós' }, value: 'b' },
                    { label: { es: 'Mejora el rendimiento', ca: 'Millora el rendiment' }, value: 'c' },
                    { label: { es: 'Solo sirve para juegos', ca: 'Només serveix per a jocs' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué recomendación es correcta para navegar con seguridad?', ca: 'Quina recomanació és correcta per a navegar amb seguretat?' },
                answer: 'a',
                options: [
                    { label: { es: 'Mantener el software actualizado', ca: 'Mantenir el programari actualitzat' }, value: 'a' },
                    { label: { es: 'Desactivar todas las actualizaciones', ca: 'Desactivar totes les actualitzacions' }, value: 'b' },
                    { label: { es: 'Abrir cualquier adjunto', ca: 'Obrir qualsevol adjunt' }, value: 'c' },
                    { label: { es: 'Compartir contraseñas por chat', ca: 'Compartir contrasenyes pel xat' }, value: 'd' }
                ]
            }
        ]
    },
    contrasenas: {
        id: 'contrasenas',
        title: { es: 'Contraseñas seguras', ca: 'Contrasenyes segures' },
        description: { es: 'Practica cómo crear claves más fuertes y resistentes.', ca: 'Practica com crear claus més fortes i resistents.' },
        questions: [
            {
                prompt: { es: '¿Cuál es una contraseña más segura?', ca: 'Quina és una contrasenya més segura?' },
                answer: 'b',
                options: [
                    { label: { es: '123456', ca: '123456' }, value: 'a' },
                    { label: { es: 'M4r!a2026!', ca: 'M4r!a2026!' }, value: 'b' },
                    { label: { es: 'password', ca: 'password' }, value: 'c' },
                    { label: { es: 'nombre123', ca: 'nom123' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué conviene hacer con cada cuenta?', ca: 'Què convé fer amb cada compte?' },
                answer: 'a',
                options: [
                    { label: { es: 'Usar una clave distinta', ca: 'Fer servir una clau diferent' }, value: 'a' },
                    { label: { es: 'Repetir siempre la misma', ca: 'Repetir sempre la mateixa' }, value: 'b' },
                    { label: { es: 'Escribirla en un papel visible', ca: 'Escriure-la en un paper visible' }, value: 'c' },
                    { label: { es: 'Compartirla con amigos', ca: 'Compartir-la amb amics' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué es mejor para proteger una cuenta?', ca: 'Què és millor per a protegir un compte?' },
                answer: 'b',
                options: [
                    { label: { es: 'No cambiarla nunca', ca: 'No canviar-la mai' }, value: 'a' },
                    { label: { es: 'Activar la verificación en dos pasos', ca: 'Activar la verificació en dos passos' }, value: 'b' },
                    { label: { es: 'Compartirla con el profesor', ca: 'Compartir-la amb el professor' }, value: 'c' },
                    { label: { es: 'Guardar la contraseña en el navegador sin más', ca: 'Guardar la contrasenya al navegador sense més' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué es una contraseña fuerte?', ca: 'Què és una contrasenya forta?' },
                answer: 'c',
                options: [
                    { label: { es: 'Muy corta', ca: 'Molt curta' }, value: 'a' },
                    { label: { es: 'Con solo letras', ca: 'Només amb lletres' }, value: 'b' },
                    { label: { es: 'Larga y con números y símbolos', ca: 'Llarga i amb números i símbols' }, value: 'c' },
                    { label: { es: 'La misma para todo', ca: 'La mateixa per a tot' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué debes hacer si sospechas que tu contraseña ha sido comprometida?', ca: 'Què has de fer si sospites que la teua contrasenya ha estat compromesa?' },
                answer: 'a',
                options: [
                    { label: { es: 'Cambiarla inmediatamente', ca: 'Canviar-la immediatament' }, value: 'a' },
                    { label: { es: 'Esperar a que pase el problema', ca: 'Esperar que passe el problema' }, value: 'b' },
                    { label: { es: 'Enviar la contraseña por chat', ca: 'Enviar la contrasenya pel xat' }, value: 'c' },
                    { label: { es: 'Olvidarte de la cuenta', ca: 'Oblidar-te del compte' }, value: 'd' }
                ]
            }
        ]
    },
    ciberacoso: {
        id: 'ciberacoso',
        title: { es: 'Ciberacoso y privacidad', ca: 'Ciberassetjament i privadesa' },
        description: { es: 'Aprende a cuidar tu imagen y tus datos online.', ca: 'Aprèn a cuidar la teua imatge i les teues dades en línia.' },
        questions: [
            {
                prompt: { es: '¿Qué es el ciberacoso?', ca: 'Què és el ciberassetjament?' },
                answer: 'b',
                options: [
                    { label: { es: 'Una forma de estudiar', ca: 'Una forma d’estudiar' }, value: 'a' },
                    { label: { es: 'Un tipo de acoso que ocurre en Internet', ca: 'Un tipus d’assetjament que ocorre a Internet' }, value: 'b' },
                    { label: { es: 'Un juego de ordenador', ca: 'Un joc d’ordinador' }, value: 'c' },
                    { label: { es: 'Una red social nueva', ca: 'Una xarxa social nova' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué harías si alguien te molesta en línea?', ca: 'Què faries si algú et molesta en línia?' },
                answer: 'a',
                options: [
                    { label: { es: 'Contarlo a un adulto de confianza', ca: 'Explicar-ho a un adult de confiança' }, value: 'a' },
                    { label: { es: 'Responder con más insultos', ca: 'Respondre amb més insults' }, value: 'b' },
                    { label: { es: 'Publicar más información', ca: 'Publicar més informació' }, value: 'c' },
                    { label: { es: 'Ignorarlo sin hacer nada', ca: 'Ignorar-ho sense fer res' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Cuál es una buena práctica de privacidad?', ca: 'Quina és una bona pràctica de privadesa?' },
                answer: 'c',
                options: [
                    { label: { es: 'Compartir tu dirección completa', ca: 'Compartir la teua adreça completa' }, value: 'a' },
                    { label: { es: 'Poner todos tus datos públicos', ca: 'Posar totes les teues dades públiques' }, value: 'b' },
                    { label: { es: 'Configurar quién puede ver tu información', ca: 'Configurar qui pot veure la teua informació' }, value: 'c' },
                    { label: { es: 'Aceptar solicitudes de desconocidos', ca: 'Acceptar sol·licituds de desconeguts' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué debes hacer antes de subir una foto?', ca: 'Què has de fer abans de pujar una foto?' },
                answer: 'b',
                options: [
                    { label: { es: 'Subirla sin pensar', ca: 'Pujar-la sense pensar' }, value: 'a' },
                    { label: { es: 'Comprobar si revela información privada', ca: 'Comprovar si revela informació privada' }, value: 'b' },
                    { label: { es: 'Mandarla a todos tus contactos', ca: 'Enviar-la a tots els teus contactes' }, value: 'c' },
                    { label: { es: 'Ponerla con la ubicación exacta', ca: 'Posar-la amb la ubicació exacta' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué ayuda a cuidar tu privacidad online?', ca: 'Què ajuda a cuidar la teua privadesa en línia?' },
                answer: 'a',
                options: [
                    { label: { es: 'Ajustar la configuración de privacidad', ca: 'Ajustar la configuració de privadesa' }, value: 'a' },
                    { label: { es: 'Compartir la contraseña con todo el mundo', ca: 'Compartir la contrasenya amb tothom' }, value: 'b' },
                    { label: { es: 'Aceptar todos los términos sin leer', ca: 'Acceptar tots els termes sense llegir' }, value: 'c' },
                    { label: { es: 'Publicar datos personales en grupo', ca: 'Publicar dades personals en grup' }, value: 'd' }
                ]
            }
        ]
    },
    huellaDigital: {
        id: 'huellaDigital',
        title: { es: 'Huella digital', ca: 'Empremta digital' },
        description: { es: 'Comprende cómo dejamos rastros cuando usamos Internet.', ca: 'Entén com deixem rastres quan fem servir Internet.' },
        questions: [
            {
                prompt: { es: '¿Qué es la huella digital?', ca: 'Què és l’empremta digital?' },
                answer: 'b',
                options: [
                    { label: { es: 'La firma que dejamos al escribir', ca: 'La signatura que deixem al escriure' }, value: 'a' },
                    { label: { es: 'El rastro de datos que dejamos al usar Internet', ca: 'El rastre de dades que deixem en fer servir Internet' }, value: 'b' },
                    { label: { es: 'Un programa de seguridad', ca: 'Un programa de seguretat' }, value: 'c' },
                    { label: { es: 'Un tipo de contraseña', ca: 'Un tipus de contrasenya' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué puede formar parte de tu huella digital?', ca: 'Què pot formar part de la teua empremta digital?' },
                answer: 'a',
                options: [
                    { label: { es: 'Tus publicaciones, búsquedas y fotos compartidas', ca: 'Les teues publicacions, cerques i fotos compartides' }, value: 'a' },
                    { label: { es: 'Solo tu nombre de usuario', ca: 'Només el teu nom d’usuari' }, value: 'b' },
                    { label: { es: 'Solo tu número de móvil', ca: 'Només el teu número de mòbil' }, value: 'c' },
                    { label: { es: 'Solo los mensajes de WhatsApp', ca: 'Només els missatges de WhatsApp' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué es una buena práctica para reducir tu huella digital?', ca: 'Què és una bona pràctica per a reduir la teua empremta digital?' },
                answer: 'c',
                options: [
                    { label: { es: 'Compartir todo en redes', ca: 'Compartir-ho tot a les xarxes' }, value: 'a' },
                    { label: { es: 'Poner datos privados en publicaciones', ca: 'Posar dades privades en publicacions' }, value: 'b' },
                    { label: { es: 'Revisar qué compartes y con quién', ca: 'Revisar què comparteixes i amb qui' }, value: 'c' },
                    { label: { es: 'Aceptar solicitudes de desconocidos', ca: 'Acceptar sol·licituds de desconeguts' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Por qué es importante cuidar tu huella digital?', ca: 'Per què és important cuidar la teua empremta digital?' },
                answer: 'b',
                options: [
                    { label: { es: 'Porque no afecta a nada', ca: 'Perquè no afecta a res' }, value: 'a' },
                    { label: { es: 'Porque puede influir en tu reputación y privacidad', ca: 'Perquè pot influir en la teua reputació i privadesa' }, value: 'b' },
                    { label: { es: 'Porque solo sirve para los adultos', ca: 'Perquè només serveix per als adults' }, value: 'c' },
                    { label: { es: 'Porque desaparece al cerrar sesión', ca: 'Perquè desapareix en tancar la sessió' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué harías para cuidar mejor tu huella digital?', ca: 'Què faries per a cuidar millor la teua empremta digital?' },
                answer: 'a',
                options: [
                    { label: { es: 'Pensar antes de publicar y revisar la privacidad', ca: 'Pensar abans de publicar i revisar la privadesa' }, value: 'a' },
                    { label: { es: 'Poner todos los datos públicos', ca: 'Posar totes les dades públiques' }, value: 'b' },
                    { label: { es: 'Compartir contraseñas con amigos', ca: 'Compartir contrasenyes amb amics' }, value: 'c' },
                    { label: { es: 'Aceptar todas las condiciones sin leer', ca: 'Acceptar totes les condicions sense llegir' }, value: 'd' }
                ]
            }
        ]
    },
    redesSociales: {
        id: 'redesSociales',
        title: { es: 'Redes sociales', ca: 'Xarxes socials' },
        description: { es: 'Aprende a usar las redes con seguridad y responsabilidad.', ca: 'Aprèn a fer servir les xarxes amb seguretat i responsabilitat.' },
        questions: [
            {
                prompt: { es: '¿Qué debes hacer antes de aceptar una solicitud de alguien desconocido?', ca: 'Què has de fer abans d’acceptar una sol·licitud d’algú desconegut?' },
                answer: 'b',
                options: [
                    { label: { es: 'Aceptar sin mirar', ca: 'Acceptar sense mirar' }, value: 'a' },
                    { label: { es: 'Comprobar quién es y si es de confianza', ca: 'Comprovar qui és i si és de confiança' }, value: 'b' },
                    { label: { es: 'Compartir datos para ser amable', ca: 'Compartir dades per a ser amable' }, value: 'c' },
                    { label: { es: 'Publicar una foto para ver si es real', ca: 'Publicar una foto per a veure si és real' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué es mejor para proteger tu cuenta?', ca: 'Què és millor per a protegir el teu compte?' },
                answer: 'a',
                options: [
                    { label: { es: 'Usar una contraseña fuerte y privada', ca: 'Fer servir una contrasenya forta i privada' }, value: 'a' },
                    { label: { es: 'Compartirla con amigos', ca: 'Compartir-la amb amics' }, value: 'b' },
                    { label: { es: 'Poner la misma en todas las apps', ca: 'Posar la mateixa en totes les aplicacions' }, value: 'c' },
                    { label: { es: 'Escribirla en la biografía', ca: 'Escriure-la a la biografia' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué conviene hacer antes de subir una publicación?', ca: 'Què convé fer abans de pujar una publicació?' },
                answer: 'c',
                options: [
                    { label: { es: 'Subirla enseguida sin revisar', ca: 'Pujar-la de seguida sense revisar' }, value: 'a' },
                    { label: { es: 'Ponerla en modo público siempre', ca: 'Posar-la en mode públic sempre' }, value: 'b' },
                    { label: { es: 'Pensar si revela información personal', ca: 'Pensar si revela informació personal' }, value: 'c' },
                    { label: { es: 'Compartirla con todos los contactos', ca: 'Compartir-la amb tots els contactes' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué debes hacer si alguien te molesta en una red social?', ca: 'Què has de fer si algú et molesta en una xarxa social?' },
                answer: 'b',
                options: [
                    { label: { es: 'Responder con más agresividad', ca: 'Respondre amb més agressivitat' }, value: 'a' },
                    { label: { es: 'Contarlo a un adulto de confianza y bloquearlo', ca: 'Explicar-ho a un adult de confiança i bloquejar-lo' }, value: 'b' },
                    { label: { es: 'Compartirlo en todos los grupos', ca: 'Compartir-ho en tots els grups' }, value: 'c' },
                    { label: { es: 'Hacer capturas y enviarlas a todos', ca: 'Fer captures i enviar-les a tothom' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Por qué es importante revisar la configuración de privacidad?', ca: 'Per què és important revisar la configuració de privadesa?' },
                answer: 'a',
                options: [
                    { label: { es: 'Porque puedes controlar quién ve tus datos', ca: 'Perquè pots controlar qui veu les teues dades' }, value: 'a' },
                    { label: { es: 'Porque no cambia nada', ca: 'Perquè no canvia res' }, value: 'b' },
                    { label: { es: 'Porque solo sirve para adultos', ca: 'Perquè només serveix per als adults' }, value: 'c' },
                    { label: { es: 'Porque es obligatorio publicar todo', ca: 'Perquè és obligatori publicar-ho tot' }, value: 'd' }
                ]
            }
        ]
    },
    inteligenciaArtificial: {
        id: 'inteligenciaArtificial',
        title: { es: 'Inteligencia artificial', ca: 'Intel·ligència artificial' },
        description: { es: 'Descubre cómo usar la IA con criterio y seguridad.', ca: 'Descobreix com fer servir la IA amb criteri i seguretat.' },
        questions: [
            {
                prompt: { es: '¿Qué es la inteligencia artificial?', ca: 'Què és la intel·ligència artificial?' },
                answer: 'b',
                options: [
                    { label: { es: 'Un tipo de ordenador antiguo', ca: 'Un tipus d’ordinador antic' }, value: 'a' },
                    { label: { es: 'Una tecnología que permite aprender y tomar decisiones', ca: 'Una tecnologia que permet aprendre i prendre decisions' }, value: 'b' },
                    { label: { es: 'Un programa para llamar por teléfono', ca: 'Un programa per a trucar per telèfon' }, value: 'c' },
                    { label: { es: 'Una red social nueva', ca: 'Una xarxa social nova' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué conviene hacer antes de confiar en una respuesta de la IA?', ca: 'Què convé fer abans de confiar en una resposta de la IA?' },
                answer: 'a',
                options: [
                    { label: { es: 'Comprobarla y pensar críticamente', ca: 'Comprovar-la i pensar críticament' }, value: 'a' },
                    { label: { es: 'Aceptar todo sin revisar', ca: 'Acceptar-ho tot sense revisar' }, value: 'b' },
                    { label: { es: 'Compartirla sin más', ca: 'Compartir-la sense més' }, value: 'c' },
                    { label: { es: 'Publicarla en redes', ca: 'Publicar-la a les xarxes' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué datos conviene proteger al usar IA?', ca: 'Quines dades convé protegir en fer servir IA?' },
                answer: 'c',
                options: [
                    { label: { es: 'Solo el nombre de usuario', ca: 'Només el nom d’usuari' }, value: 'a' },
                    { label: { es: 'Solo la contraseña', ca: 'Només la contrasenya' }, value: 'b' },
                    { label: { es: 'Datos personales y sensibles', ca: 'Dades personals i sensibles' }, value: 'c' },
                    { label: { es: 'Solo las fotos de perfil', ca: 'Només les fotos de perfil' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Por qué es importante revisar el uso de la IA?', ca: 'Per què és important revisar l’ús de la IA?' },
                answer: 'b',
                options: [
                    { label: { es: 'Porque no sirve para nada', ca: 'Perquè no serveix per a res' }, value: 'a' },
                    { label: { es: 'Porque puede dar respuestas incorrectas o sesgadas', ca: 'Perquè pot donar respostes incorrectes o esbiaixades' }, value: 'b' },
                    { label: { es: 'Porque siempre es perfecta', ca: 'Perquè sempre és perfecta' }, value: 'c' },
                    { label: { es: 'Porque solo se usa en clase', ca: 'Perquè només s’usa a classe' }, value: 'd' }
                ]
            },
            {
                prompt: { es: '¿Qué actitud es la más adecuada al usar IA?', ca: 'Quina actitud és la més adequada en fer servir IA?' },
                answer: 'a',
                options: [
                    { label: { es: 'Usarla con criterio y responsabilidad', ca: 'Fer-la servir amb criteri i responsabilitat' }, value: 'a' },
                    { label: { es: 'Confiar ciegamente en todo', ca: 'Confiar cega ment en tot' }, value: 'b' },
                    { label: { es: 'Compartir datos privados sin pensar', ca: 'Compartir dades privades sense pensar' }, value: 'c' },
                    { label: { es: 'Usarla para engañar a otros', ca: 'Fer-la servir per a enganyar els altres' }, value: 'd' }
                ]
            }
        ]
    }
};

const textosUI = {
    es: {
        title: 'Cuestionarios de seguridad digital',
        intro: 'Elige una temática para empezar.',
        idioma: 'Idioma',
        castellano: 'Castellano',
        valenciano: 'Valenciano',
        empezar: 'Empezar →',
        volver: '← Volver al menú',
        aciertos: 'Aciertos',
        enviar: 'Enviar respuestas',
        corregir: 'Corregir',
        resultadoBase: 'Has acertado',
        excelente: '¡Excelente! 🎉',
        muyBien: '¡Muy bien! 👍',
        repasa: 'Bien, pero repasa los temas 📖',
        estudio: 'Necesitas estudiar más 📚'
    },
    ca: {
        title: 'Qüestionaris de seguretat digital',
        intro: 'Tria una temàtica per a començar.',
        idioma: 'Idioma',
        castellano: 'Castellà',
        valenciano: 'Valencià',
        empezar: 'Començar →',
        volver: '← Tornar al menú',
        aciertos: 'Encerts',
        enviar: 'Enviar respostes',
        corregir: 'Corregir',
        resultadoBase: 'Has encertat',
        excelente: '¡Excel·lent! 🎉',
        muyBien: '¡Molt bé! 👍',
        repasa: 'Bé, però repassa els temes 📖',
        estudio: 'Necessites estudiar més 📚'
    }
};

function t(value) {
    if (typeof value === 'string') {
        return value;
    }

    if (value && typeof value === 'object') {
        return value[estado.idioma] || value.es || '';
    }

    return '';
}

function uiText(clave) {
    return textosUI[estado.idioma][clave];
}

function aplicarIdioma() {
    document.documentElement.lang = estado.idioma === 'ca' ? 'ca' : 'es';
    document.title = estado.idioma === 'ca'
        ? 'Qüestionaris de seguretat digital'
        : 'Cuestionarios de Seguridad Digital';
}

function renderMenu() {
    estado.temaActual = null;
    aplicarIdioma();

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="toolbar">
            <div class="lang-selector">
                <label for="idiomaSelect">${uiText('idioma')}</label>
                <select id="idiomaSelect">
                    <option value="es" ${estado.idioma === 'es' ? 'selected' : ''}>${uiText('castellano')}</option>
                    <option value="ca" ${estado.idioma === 'ca' ? 'selected' : ''}>${uiText('valenciano')}</option>
                </select>
            </div>
        </div>
        <h1>${uiText('title')}</h1>
        <p class="intro">${uiText('intro')}</p>
        <div class="menu-grid">
            ${Object.values(tematicas).map(tema => `
                <button class="menu-card" data-tema-id="${tema.id}">
                    <h2>${t(tema.title)}</h2>
                    <p>${t(tema.description)}</p>
                    <span>${uiText('empezar')}</span>
                </button>
            `).join('')}
        </div>
    `;

    document.getElementById('idiomaSelect').addEventListener('change', (event) => {
        estado.idioma = event.target.value;
        renderMenu();
    });

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

    estado.temaActual = temaId;
    aplicarIdioma();

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="toolbar">
            <div class="lang-selector">
                <label for="idiomaSelect">${uiText('idioma')}</label>
                <select id="idiomaSelect">
                    <option value="es" ${estado.idioma === 'es' ? 'selected' : ''}>${uiText('castellano')}</option>
                    <option value="ca" ${estado.idioma === 'ca' ? 'selected' : ''}>${uiText('valenciano')}</option>
                </select>
            </div>
        </div>
        <div class="quiz-header">
            <div>
                <button class="back-btn" id="volverMenuBtn">${uiText('volver')}</button>
                <h1>${t(tema.title)}</h1>
                <p>${t(tema.description)}</p>
            </div>
            <div>
                <div id="contadorAciertos" class="contador-aciertos">${uiText('aciertos')}: 0/${tema.questions.length}</div>
                <div class="progreso-wrapper">
                    <div class="progreso-barra">
                        <div id="progresoBarra"></div>
                    </div>
                </div>
            </div>
        </div>
        <form id="quizForm">
            ${tema.questions.map((pregunta, index) => `
                <div class="pregunta" data-index="${index}">
                    <p>${index + 1}. ${t(pregunta.prompt)}</p>
                    ${pregunta.options.map(opcion => `
                        <label class="opcion">
                            <input type="radio" name="q${index + 1}" value="${opcion.value}" />
                            ${t(opcion.label)}
                        </label>
                    `).join('')}
                </div>
            `).join('')}
            <div class="acciones">
                <button type="submit">${uiText('enviar')}</button>
                <button type="button" id="corregirBtn">${uiText('corregir')}</button>
            </div>
            <div id="resultado" class="resultado"></div>
        </form>
    `;

    document.getElementById('idiomaSelect').addEventListener('change', (event) => {
        estado.idioma = event.target.value;
        renderTema(estado.temaActual);
    });

    document.getElementById('volverMenuBtn').addEventListener('click', renderMenu);
    document.getElementById('quizForm').addEventListener('submit', (event) => {
        event.preventDefault();
        corregirRespuestas(tema);
    });
    document.getElementById('corregirBtn').addEventListener('click', () => corregirRespuestas(tema));

    document.querySelectorAll('.pregunta input[type="radio"]').forEach(input => {
        input.addEventListener('change', () => mostrarFeedbackPregunta(input, tema));
    });
}

function actualizarContadorAciertos(tema) {
    const contador = document.getElementById('contadorAciertos');
    const barra = document.getElementById('progresoBarra');
    if (!contador || !barra) {
        return;
    }

    let aciertos = 0;
    tema.questions.forEach((pregunta, index) => {
        const seleccion = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (seleccion && seleccion.value === pregunta.answer) {
            aciertos += 1;
        }
    });

    const porcentaje = Math.round((aciertos / tema.questions.length) * 100);
    contador.textContent = `${uiText('aciertos')}: ${aciertos}/${tema.questions.length}`;
    barra.style.width = `${porcentaje}%`;
}

function mostrarFeedbackPregunta(input, tema) {
    const preguntaIndex = input.name.replace('q', '') - 1;
    const pregunta = tema.questions[preguntaIndex];
    const preguntaContainer = input.closest('.pregunta');
    const opciones = preguntaContainer.querySelectorAll('.opcion');

    opciones.forEach(opcion => {
        opcion.classList.remove('correcta', 'incorrecta');
    });

    const seleccion = input.closest('label');
    if (input.value === pregunta.answer) {
        seleccion.classList.add('correcta');
    } else {
        seleccion.classList.add('incorrecta');
        const correcta = Array.from(opciones).find(opcion => opcion.querySelector('input').value === pregunta.answer);
        if (correcta) {
            correcta.classList.add('correcta');
        }
    }

    actualizarContadorAciertos(tema);
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

    actualizarContadorAciertos(tema);
    mostrarResultado(aciertos, total);
}

function mostrarResultado(aciertos, total) {
    const resultado = document.getElementById('resultado');
    const porcentaje = Math.round((aciertos / total) * 100);
    let mensaje = `${uiText('resultadoBase')} ${aciertos} de ${total} preguntas (${porcentaje}%)`;
    let color = '#667eea';

    if (porcentaje === 100) {
        mensaje += ` ${uiText('excelente')}`;
        color = '#27ae60';
    } else if (porcentaje >= 80) {
        mensaje += ` ${uiText('muyBien')}`;
        color = '#27ae60';
    } else if (porcentaje >= 60) {
        mensaje += ` ${uiText('repasa')}`;
        color = '#f39c12';
    } else {
        mensaje += ` ${uiText('estudio')}`;
        color = '#e74c3c';
    }

    resultado.textContent = mensaje;
    resultado.style.color = color;
    resultado.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', renderMenu);
