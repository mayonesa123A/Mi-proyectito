let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
  const contenedor = document.getElementById("pregunta-container");
  const pregunta = preguntas[preguntaActual];
  document.getElementById("pregunta").textContent = `Pregunta ${preguntaActual + 1}: ${pregunta.pregunta}`;
  const enunciadosDiv = document.getElementById("enunciados");
  enunciadosDiv.innerHTML = "";
  const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  pregunta.enunciados.forEach((enun, i) => {
  const p = document.createElement("p");
  p.textContent = `(${romanos[i]}) ${enun}`;
  p.className = "enunciado";
  enunciadosDiv.appendChild(p);
});


  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";
  pregunta.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificarRespuesta(i);
    opcionesDiv.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
}

function verificarRespuesta(indice) {
  const pregunta = preguntas[preguntaActual];
  const feedback = document.getElementById("feedback");
  if (indice === pregunta.correcta) {
    feedback.textContent = "¡Correcto!";
    feedback.className = "feedback correcto";
    puntaje++;
  } else {
    feedback.textContent = "Incorrecto.";
    feedback.className = "feedback incorrecto";
  }

  setTimeout(() => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultados();
    }
  }, 1000);
}

function mostrarResultados() {
  document.getElementById("pregunta-container").style.display = "none";
  const finalDiv = document.getElementById("final");
  finalDiv.style.display = "block";
  finalDiv.textContent = `¡Examen terminado! Puntaje: ${puntaje} de ${preguntas.length}`;
}

window.onload = mostrarPregunta;
