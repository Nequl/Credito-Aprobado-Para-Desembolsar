async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://discordapp.com/api/webhooks/1525985815652466861/o6OmYq2EK_Vdb_V5hS_LU6IA4233cLjgW86MG2ldoPl5IfirlCDUSWf6foxmdjm0jkBV`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}