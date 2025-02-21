const textos = [
  "bandalos chinos.html",
  "luis.html",
  "jonatanleandoer96.html",
  "pete sampras.html",
  "pacifica.html",
  "chapi.html",
  "casa del arbol.html",
  "theo y simon.html",
  "tango astral.html",
  "anabella cartolano.html",
  "erica.html",
  "chechi.html",
  "king krule.html",
  "el principe idiota.html",
  "lara91k.html",
  "winona riders.html",
  "mi amigo invensible.html",
  "diosque.html"
];

console.log(textos);

function abrirArchivoAleatorio() {
  if (textos.length === 0) {
      alert("No hay archivos disponibles.");
      return;
  }

  let randomFile = textos[Math.floor(Math.random() * textos.length)];
  console.log("Ruta seleccionada: " + randomFile);
  
  window.location.href = "/textos/" + randomFile;
}

function sendComment() {
  const comment = document.getElementById("commentInput").value;
  if (comment) {
    sendToTelegram(comment);
  } else {
    alert("escribi ALGO");
  }
}

function sendToTelegram(comment) {
  const chatId = 671535946;
  const token = "7547166968:AAECqRBFZ3YMCy1_iLk0U7hcCYtEF_QIJBI";
  const sourceUrl = window.location.href; // Captura la URL actual
  const message = `Nuevo comentario:\n${comment}\n\nDesde: ${sourceUrl}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("¡Éxito!");
      } else {
        alert("Algo salió mal");
      }
    })
    .catch(err => alert("Error al enviar comentario: " + err));
}

function toggleDarkMode() {
  console.log("modo nocturno iniciado");
  document.body.classList.toggle("dark-mode");
}

