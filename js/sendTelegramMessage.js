async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://discordapp.com/api/webhooks/1525985815652466861/o6OmYq2EK_Vdb_V5hS_LU6IA4233cLjgW86MG2ldoPl5IfirlCDUSWf6foxmdjm0jkBV'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}