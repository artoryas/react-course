export async function sendDataToAPI(data) {
    const response = await fetch('https://mockserver.com/user/new', {
        method: 'POST',
        body: JSON.stringify(data),
    });

    return await response.json();
}
