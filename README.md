# Cuestionario de Peligros en Internet - 1º ESO

## 📋 Descripción General

Este proyecto es un cuestionario interactivo diseñado para evaluar el conocimiento del alumnado de 1º de ESO sobre los **peligros y riesgos en Internet**. La herramienta forma parte de una actividad educativa posterior a una charla sobre Seguridad en Internet.

---

## 🎯 Objetivos

- ✅ Evaluar el conocimiento adquirido sobre seguridad en Internet
- ✅ Identificar áreas débiles que necesitan refuerzo
- ✅ Proporcionar retroalimentación inmediata al alumnado
- ✅ Crear una experiencia interactiva y motivadora
- ✅ Facilitar la corrección automática de respuestas

---

## 📁 Estructura del Proyecto

```
questionari-perills-internet-1eso/
├── index.html          # Archivo principal con la estructura del cuestionario
├── style.css           # Estilos CSS para el diseño visual
├── script.js           # Lógica JavaScript para validación de respuestas
└── README.md          # Este archivo - documentación del proyecto
```

---

## 🛠️ Plan de Trabajo

### Fase 1: Estructura Base ✅
- [x] Crear archivo HTML con estructura básica
- [x] Añadir 10 preguntas sobre peligros en Internet
- [x] Implementar opciones de respuesta (4 alternativas por pregunta)
- [x] Crear sistema de radios buttons para seleccionar respuestas

### Fase 2: Diseño Visual ✅
- [x] Crear archivo CSS externo (style.css)
- [x] Diseño responsivo y moderno
- [x] Gradientes de color atractivos (púrpura y azul)
- [x] Efectos hover en preguntas y botones
- [x] Mejorar accesibilidad visual
- [x] Animaciones suaves y transiciones

### Fase 3: Funcionalidad JavaScript ✅
- [x] Crear archivo script.js
- [x] Implementar función de corrección automática
- [x] Marcar respuestas correctas e incorrectas visualmente
- [x] Calcular porcentaje de aciertos
- [x] Mostrar retroalimentación según desempeño
- [x] Implementar botón para limpiar respuestas
- [x] Añadir mensajes motivadores

---

## 📚 Contenido del Cuestionario

El cuestionario consta de **10 preguntas** sobre los siguientes temas:

1. **¿Qué es un phishing?**
   - Conceptos sobre ingeniería social y fraude electrónico

2. **¿Qué debes hacer si recibes un mensaje sospechoso?**
   - Protección contra spam y mensajes maliciosos

3. **¿Por qué son peligrosas las contraseñas débiles?**
   - Seguridad de contraseñas

4. **¿Qué significa descargar software de fuentes desconocidas?**
   - Riesgos de descargas no verificadas

5. **¿Qué es un ransomware?**
   - Tipos de malware

6. **¿Cuál es la mejor manera de proteger tus datos?**
   - Buenas prácticas de seguridad

7. **¿Qué debes hacer si una web pide datos bancarios de forma extraña?**
   - Seguridad en transacciones online

8. **¿Qué es un malware?**
   - Definición de software malicioso

9. **¿Por qué es peligroso hacer clic en enlaces desconocidos?**
   - Phishing y enlaces maliciosos

10. **¿Qué recomendación es correcta para navegar con seguridad?**
    - Actualizaciones de software y seguridad preventiva

---

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del documento
- **CSS3**: Diseño visual con gradientes, flexbox y animaciones
- **JavaScript (Vanilla)**: Lógica de validación sin dependencias externas
- **Responsive Design**: Adaptable a diferentes dispositivos

---

## 🎨 Características del Diseño

### Visual
- 🎨 Gradiente de fondo: Púrpura → Azul
- 📱 Diseño responsive (móvil, tablet, desktop)
- ✨ Efectos hover suaves en elementos interactivos
- 🎯 Interfaz intuitiva y clara

### Interactividad
- 🖱️ Preguntas con efecto elevación al pasar el ratón
- ✓ Validación inmediata de respuestas
- 🎯 Botones con gradientes y efectos de presión
- 📊 Resultado con código de colores según desempeño

---

## 📊 Sistema de Puntuación

El resultado se muestra con diferentes niveles de éxito:

| Porcentaje | Mensaje | Color |
|-----------|---------|-------|
| 100% | ¡Excelente! 🎉 | Verde |
| 80-99% | ¡Muy bien! 👍 | Verde |
| 60-79% | Bien, pero repasa los temas 📖 | Naranja |
| < 60% | Necesitas estudiar más 📚 | Rojo |

---

## 🚀 Cómo Usar

1. **Abrir el archivo**: Hacer doble clic en `index.html` o abrir con un navegador web
2. **Responder preguntas**: Seleccionar una opción para cada pregunta
3. **Corregir**: Hacer clic en el botón "Corregir" para validar las respuestas
4. **Ver resultados**: Se mostrará el número de aciertos, porcentaje y retroalimentación
5. **Limpiar**: Hacer clic en "Limpiar" para reiniciar el cuestionario

---

## 🔧 Respuestas Correctas

```javascript
p1: 'a'  // Un ataque que intenta engañar para robar datos
p2: 'b'  // Borrarlo y no hacer clic
p3: 'b'  // Son fáciles de adivinar o romper
p4: 'b'  // Puede contener malware
p5: 'a'  // Un programa que cifra archivos y pide dinero
p6: 'b'  // Usar contraseñas únicas y fuertes
p7: 'b'  // Verificar la autenticidad antes de proporcionar datos
p8: 'a'  // Un programa malicioso
p9: 'a'  // Pueden llevar a páginas falsas o maliciosas
p10: 'a' // Mantener el software actualizado
```

---

## 📝 Requisitos del Sistema

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere conexión a Internet
- No requiere instalación de software
- Compatible con dispositivos móviles

---

## 🎓 Contexto Educativo

**Curso**: 1º ESO (11-12 años)  
**Asignatura**: Educación Digital / Tecnología  
**Duración estimada**: 15-20 minutos  
**Previa**: Charla sobre Seguridad en Internet

---

## 📝 Notas para el Educador

- El cuestionario proporciona corrección automática
- Las respuestas se marcan en tiempo real
- Los estudiantes pueden repetir el cuestionario múltiples veces
- La retroalimentación es constructiva y motivadora
- Todos los datos se procesan localmente (sin envío a servidores)

---

## 🔐 Privacidad

Este cuestionario funciona completamente en el navegador del cliente. **No se recopilan, almacenan ni envían datos** a servidores externos. Las respuestas del estudiante permanecen privadas en su dispositivo.

---

## 📞 Soporte

En caso de dudas o problemas técnicos, verificar:
- ✅ Que todos los archivos (HTML, CSS, JS) estén en la misma carpeta
- ✅ Que el navegador tenga JavaScript habilitado
- ✅ Que los nombres de archivo sean exactos (mayúsculas/minúsculas)

---

**Última actualización**: 2 de julio de 2026  
**Versión**: 1.0
