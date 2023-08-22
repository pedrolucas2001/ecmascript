function processoDemorado(){
    return new Promise((resolve) => {
        // setTimeout trabalha o tempo para executar
        setTimeout(()=>{
            console.log("Espera concluída");
            //pois a promessa exige que ela seja rejeitada
            resolve();
        },2000);
    })
}

// ASYNC executa a função imediatamente quando for chamada;
async function carregando(){
    console.log("Iniciou");
    // AWAIT exige que a função 'console.log' seja executada antes que a função 'processo demorado' execute ou seja
    // ESPERE
    await processoDemorado();
    console.log(("Terminou"));
}

carregando();
