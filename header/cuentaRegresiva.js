// cuentaRegresiva.js

document.addEventListener('DOMContentLoaded', function () {
    // Fecha objetivo: 30 de marzo de 2024 a las 21:00 (9 PM)
    var fechaObjetivo = new Date('March 30, 2024 21:00:00').getTime();

    // Actualizar la cuenta regresiva cada segundo
    var x = setInterval(function () {
        // Obtener la fecha actual y calcular la diferencia de tiempo
        var fechaActual = new Date().getTime();
        var diferencia = fechaObjetivo - fechaActual;

        // Calcular días, horas, minutos y segundos
        var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Función para agregar cero inicial si es menor a 10
        function agregarCero(num) {
            return (num < 10 ? "0" : "") + num;
        }

        // Actualizar el contenido de los elementos p con cero inicial
        document.getElementById('dias').innerHTML = agregarCero(dias);
        document.getElementById('horas').innerHTML = agregarCero(horas);
        document.getElementById('minutos').innerHTML = agregarCero(minutos);
        document.getElementById('segundos').innerHTML = agregarCero(segundos);

        // Si la cuenta regresiva termina, mostrar un mensaje
        if (diferencia < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "¡La Fiesta Ha Comenzado!";
        }
    }, 1000);
});
