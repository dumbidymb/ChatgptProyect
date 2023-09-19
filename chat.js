document.addEventListener("DOMContentLoaded", function () {
    const fraseElement = document.getElementById("frase");
    const fraseInicial = "Tu eres la inspiración que buscas";
    let frases = [fraseInicial];
  
    // Función para actualizar y animar la frase
    function actualizarFrase() {
      fraseElement.classList.remove("frase"); // Elimina la clase de animación actual
      void fraseElement.offsetWidth; // Fuerza una recalculación para reiniciar la animación
      fraseElement.classList.add("frase"); // Vuelve a agregar la clase para iniciar la animación
      fraseElement.innerText = frases.join("\n"); // Mostrar todas las frases
    }
  
    // Agregar frase
    document.getElementById("agregar-frase").addEventListener("click", function () {
      const nuevaFrase = prompt("Ingrese una nueva frase:");
      if (nuevaFrase !== null) {
        frases.push(nuevaFrase);
        actualizarFrase();
      }
    });
  
    // Frase Nueva (Cambiar la frase actual por una nueva)
    document.getElementById("frase-nueva").addEventListener("click", function () {
      const nuevaFrase = prompt("Ingrese una frase nueva:");
      if (nuevaFrase !== null) {
        frases = [nuevaFrase];
        actualizarFrase();
      }
    });
  
    // Reiniciar frase
    document.getElementById("reiniciar").addEventListener("click", function () {
      frases = [fraseInicial];
      actualizarFrase();
    });
  
    // Al cargar la página
    actualizarFrase();
  });
  