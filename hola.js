function mostrarRespuesta() {
    const problema = document.getElementById("problema").value;
    const respuesta = document.getElementById("respuesta");

    switch (problema) {
        case "1":
            respuesta.innerHTML = "Tu solución es: Entrena un grupo de ardillas especializadas en encontrar objetos.";
            break;
        case "2":
            respuesta.innerHTML = "Tu solución es: Instala una pantalla gigante en la parte trasera de tu automóvil y organiza competencias de dibujo entre conductores cercanos para entretenerse mientras esperan.";
            break;
        case "3":
            respuesta.innerHTML = "Tu solución es: Crea un sistema de imanes en el techo sobre tu cama para que puedas pegar tus objetos a él antes de dormir y no se caigan durante la noche.";
            break;
        case "4":
        case "5":
        case "6":
        case "7":
            respuesta.innerHTML = "Tu solución es: Implementa una estrategia personalizada para resolver este problema.";
            break;
        default:
            respuesta.innerHTML = "";
    }
}