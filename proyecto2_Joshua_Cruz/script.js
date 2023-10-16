function tiempoReloj(){
    
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let MiReloj = hora + ":" + minuto + ":" + segundo;
    let relojdigital = document.querySelector(".reloj");
    relojdigital.innerHTML = MiReloj;
}

setInterval(tiempoReloj, 1000);